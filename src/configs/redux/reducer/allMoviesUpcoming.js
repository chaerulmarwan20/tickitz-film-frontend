const initialState = {
  allMoviesUpcoming: [],
  totalPage: 0,
  currentPage: 0,
};

const allMoviesUpcomingReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_MOVIES_UPCOMING") {
    return {
      ...state,
      totalPage: action.total,
      currentPage: action.current,
      allMoviesUpcoming: action.payload,
    };
  } else if (action.type === "SEARCH_MOVIES_UPCOMING") {
    return {
      ...state,
      allMoviesUpcoming: action.payload,
    };
  } else {
    return state;
  }
};

export default allMoviesUpcomingReducer;
