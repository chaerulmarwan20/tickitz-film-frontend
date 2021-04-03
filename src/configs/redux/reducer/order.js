const initialState = {
  ticket: [],
  schedule: [],
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TICKET":
      return {
        ...state,
        ticket: action.payload,
      };
    case "GET_SCHEDULE":
      return {
        ...state,
        schedule: action.payload,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
