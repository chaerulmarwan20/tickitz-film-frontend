import axios from "axios";

export const getAllMoviesShowing = (page, perPage) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(
        `${Url}/movies/is-realese/keyword=${""}?page=${page}&perPage=${perPage}`
      )
      .then((res) => {
        dispatch({
          type: "GET_ALL_MOVIES_SHOWING",
          payload: res.data.data,
          total: res.data.totalPage,
          current: res.data.currentPage,
          previous: res.data.previousPage,
          next: res.data.nextPage,
        });
      });
  };
};

export const searchMoviesShowing = (data) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_MOVIES_SHOWING", payload: data });
  };
};
