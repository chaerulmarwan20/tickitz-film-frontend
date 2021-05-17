import axios from "axios";

export const getShowingMovies = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(`${Url}/movies/realesed/?keyword=true`)
      .then((res) => {
        dispatch({ type: "GET_SHOWING", payload: res.data.data });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getUpcomingMovies = (date) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(`${Url}/movies/find-movies/by-date/?date=${date}`)
      .then((res) => {
        dispatch({ type: "GET_UPCOMING", payload: res.data.data });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
