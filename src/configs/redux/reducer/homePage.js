const initialState = {
  showingMovies: [],
  upcomingMovies: [],
};

const homePageReducer = (state = initialState, action) => {
  if (action.type === "GET_SHOWING") {
    return {
      ...state,
      showingMovies: action.payload,
    };
  } else if (action.type === "GET_UPCOMING") {
    return {
      ...state,
      upcomingMovies: action.payload,
    };
  } else {
    return state;
  }
};

export default homePageReducer;
