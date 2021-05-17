const initialState = {
  allMoviesShowing: [],
  total: 0,
  current: 0,
  previousPage: 0,
  nextPage: 0,
};

const allMoviesShowingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIES_SHOWING":
      return {
        ...state,
        total: action.total,
        current: action.current,
        allMoviesShowing: action.payload,
        previousPage: action.previous,
        nextPage: action.next,
      };
    case "SEARCH_MOVIES_SHOWING":
      return {
        ...state,
        allMoviesShowing: action.payload,
      };
    default:
      return state;
  }
};

export default allMoviesShowingReducer;
