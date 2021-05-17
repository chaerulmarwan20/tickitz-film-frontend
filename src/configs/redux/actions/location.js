import axios from "axios";

export const getLocation = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axios
      .get(`${Url}/cities`)
      .then((res) => {
        dispatch({ type: "GET_LOCATION", payload: res.data.data });
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
