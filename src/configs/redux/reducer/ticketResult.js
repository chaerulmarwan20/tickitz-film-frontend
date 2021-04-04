const initialState = {
  ticket: [],
};

const ticketResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TICKET":
      return {
        ...state,
        ticket: action.payload,
      };
    default:
      return state;
  }
};

export default ticketResultReducer;
