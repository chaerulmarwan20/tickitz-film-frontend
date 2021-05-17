import axiosApiInstance from "../../../helpers/axios";

export const getOrderHistory = (sortBy, order, id) => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance.get(`${Url}/transactions/users/${id}`).then((res) => {
      dispatch({ type: "GET_ORDER_HISTORY", payload: res.data.data });
    });
  };
};
