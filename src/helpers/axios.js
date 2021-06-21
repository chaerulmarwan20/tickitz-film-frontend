const axios = require("axios");
const Swal = require("sweetalert2");
const axiosApiInstance = axios.create();
const Url = process.env.REACT_APP_API_URL;

const refreshAccessToken = () => {
  return new Promise((resolve, reject) => {
    axiosApiInstance
      .post(`${Url}/users/refresh-token`, {
        refreshToken: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("refresh_token", res.data.data.refreshToken);
        resolve(res.data.data.token);
      });
  });
};

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (
        error.response.data.message === "Token is expired" ||
        error.response.data.message === "Token is not active" ||
        error.response.data.message === "Invalid signature"
      ) {
        const access_token = await refreshAccessToken();
        originalRequest._retry = true;
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + access_token;
        return axiosApiInstance(originalRequest);
      } else if (
        error.response.data.message === "Refresh token is expired" ||
        error.response.data.message === "Refresh token is not active" ||
        error.response.data.message === "Invalid signature refresh token"
      ) {
        localStorage.clear();
        Swal.fire({
          title: "Error!",
          text: "Session is over",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
