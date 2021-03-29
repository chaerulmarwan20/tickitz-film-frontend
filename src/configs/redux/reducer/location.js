const initialState = {
  location: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOCATION":
      return {
        location: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
