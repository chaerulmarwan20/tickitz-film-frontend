import axios from "axios";

export const getLocation = () => {
  return (dispatch) => {
    const Url = process.env.REACT_APP_API_URL;
    axios.get(`${Url}/cities`).then((res) => {
      dispatch({ type: "GET_LOCATION", payload: res.data.data });
    });
  };
};
