import axiosApiInstance from "../../../helpers/axios";

export const getAllTicket = (idSchedule, idTime, idMovie) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(
        `${Url}/tickets/order?schedule=${idSchedule}&time=${idTime}&movie=${idMovie}`
      )
      .then((res) => {
        dispatch({
          type: "GET_ALL_TICKET",
          payload: res.data.data,
        });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getSchedule = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/schedule/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_SCHEDULE",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
