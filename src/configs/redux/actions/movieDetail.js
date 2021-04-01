import axiosApiInstance from "../../../helpers/axios";

export const getMovieDetail = (id) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance.get(`${Url}/movies/${id}`).then((res) => {
      dispatch({ type: "GET_DETAIL", payload: res.data.data });
    });
  };
};
