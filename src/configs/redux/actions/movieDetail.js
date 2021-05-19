import axiosApiInstance from "../../../helpers/axios";

export const getMovieDetail = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/movies/${id}`)
      .then((res) => {
        dispatch({ type: "GET_DETAIL", payload: res.data.data });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
