import axiosApiInstance from "../../../helpers/axios";

export const getTicket = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/transactions/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_TICKET",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
