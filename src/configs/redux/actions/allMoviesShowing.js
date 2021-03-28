import axios from "axios";

export const getAllMoviesShowing = (page, perPage) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(
        `${Url}/movies/realesed/?keyword=true&page=${page}&perPage=${perPage}`
      )
      .then((res) => {
        dispatch({
          type: "GET_ALL_MOVIES_SHOWING",
          payload: res.data.data,
          total: res.data.totalPage,
          current: res.data.currentPage,
        });
      });
  };
};

export const searchMoviesShowing = (data) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_MOVIES_SHOWING", payload: data });
  };
};
