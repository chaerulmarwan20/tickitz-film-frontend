const initialState = {
  allMoviesUpcoming: [],
  totalPage: 0,
  currentPage: 0,
};

const allMoviesUpcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIES_UPCOMING":
      return {
        ...state,
        totalPage: action.total,
        currentPage: action.current,
        allMoviesUpcoming: action.payload,
      };
    case "SEARCH_MOVIES_UPCOMING":
      return {
        ...state,
        allMoviesUpcoming: action.payload,
      };
    default:
      return state;
  }
};

export default allMoviesUpcomingReducer;
