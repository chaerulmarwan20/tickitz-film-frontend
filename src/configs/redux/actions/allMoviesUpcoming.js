import axios from "axios";

export const getAllMoviesUpcoming = (page, perPage) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(
        `${Url}/movies/realesed/?keyword=false&page=${page}&perPage=${perPage}`
      )
      .then((res) => {
        dispatch({
          type: "GET_ALL_MOVIES_UPCOMING",
          payload: res.data.data,
          total: res.data.totalPage,
          current: res.data.currentPage,
        });
      });
  };
};

export const searchMoviesUpcoming = (data) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_MOVIES_UPCOMING", payload: data });
  };
};
