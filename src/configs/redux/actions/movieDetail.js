import axios from "axios";

export const getMovieDetail = (id) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    axios
      .get(`${Url}/movies/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: "GET_DETAIL", payload: res.data.data });
      });
  };
};
