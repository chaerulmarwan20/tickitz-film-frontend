const initialState = {
  movieDetail: [],
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        movieDetail: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailReducer;
