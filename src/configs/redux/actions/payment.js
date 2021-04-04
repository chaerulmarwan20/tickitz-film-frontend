import axiosApiInstance from "../../../helpers/axios";

export const getMovie = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/movies/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_MOVIE",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getCinema = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/cinemas/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_CINEMA",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const createTransactions = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .post(`${Url}/transactions/`, {
        date: data.dateTransactions,
        time: data.time,
        paymentMethod: data.paymentMethod,
        idUser: data.idUser,
        idCinema: data.idCinema,
        movieTitle: data.title,
        category: data.category,
        qty: data.qty,
        seat: data.seat,
        total: data.total,
        idSeat: data.idSeat,
      })
      .then((res) => {
        resolve({ message: res.data.message, idTicket: res.data.data[0].id });
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
