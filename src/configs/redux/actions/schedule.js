import axiosApiInstance from "../../../helpers/axios";

export const getAllSchedule = (date, idMovie, idCity, page, perPage) => (
  dispatch
) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(
        `${Url}/schedule/?date=${date}&movie=${idMovie}&city=${idCity}&page=${page}&perPage=${perPage}`
      )
      .then((res) => {
        dispatch({
          type: "GET_ALL_SCHEDULE",
          payload: res.data.data,
          total: res.data.totalPage,
          current: res.data.currentPage,
        });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getAllTime = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/schedule/time`)
      .then((res) => {
        dispatch({
          type: "GET_ALL_TIME",
          payload: res.data.data,
        });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getAllTicket = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/schedule/ticket`)
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
