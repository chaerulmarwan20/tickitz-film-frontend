const initialState = {
  movie: [],
  cinema: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "GET_CINEMA":
      return {
        ...state,
        cinema: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
