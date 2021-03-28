const initialState = {
  movieDetail: [],
};

const movieDetailReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL") {
    return {
      movieDetail: action.payload,
    };
  } else {
    return state;
  }
};

export default movieDetailReducer;
