const initialState = {
  schedule: [],
  time: [],
  ticket: [],
  totalPage: 0,
  currentPage: 0,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SCHEDULE":
      return {
        ...state,
        totalPage: action.total,
        currentPage: action.current,
        schedule: action.payload,
      };
    case "GET_ALL_TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "GET_ALL_TICKET":
      return {
        ...state,
        ticket: action.payload,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
