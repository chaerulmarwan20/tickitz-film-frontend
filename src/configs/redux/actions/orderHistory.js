import axios from "axios";

export const getOrderHistory = (sortBy, order) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    axios
      .get(`${Url}/transactions/users/${id}?sortBy=${sortBy}&order=${order}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: "GET_ORDER_HISTORY", payload: res.data.data });
      });
  };
};
