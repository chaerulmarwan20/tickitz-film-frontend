const initialState = {
  allMoviesShowing: [],
  totalPage: 0,
  currentPage: 0,
};

const allMoviesShowingReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_MOVIES_SHOWING") {
    return {
      ...state,
      totalPage: action.total,
      currentPage: action.current,
      allMoviesShowing: action.payload,
    };
  } else if (action.type === "SEARCH_MOVIES_SHOWING") {
    return {
      ...state,
      allMoviesShowing: action.payload,
    };
  } else {
    return state;
  }
};

export default allMoviesShowingReducer;
