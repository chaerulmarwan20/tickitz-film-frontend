const initialState = {
  showingMovies: [],
  upcomingMovies: [],
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHOWING":
      return {
        ...state,
        showingMovies: action.payload,
      };
    case "GET_UPCOMING":
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default homePageReducer;
