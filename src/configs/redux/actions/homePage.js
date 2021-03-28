import axios from "axios";

export const getShowingMovies = () => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios.get(`${Url}/movies/realesed/?keyword=true`).then((res) => {
      dispatch({ type: "GET_SHOWING", payload: res.data.data });
    });
  };
};

export const getUpcomingMovies = () => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios.get(`${Url}/movies/realesed/?keyword=false`).then((res) => {
      dispatch({ type: "GET_UPCOMING", payload: res.data.data });
    });
  };
};
