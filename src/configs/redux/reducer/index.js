import { combineReducers } from "redux";
import homePageReducer from "./homePage";
import movieDetailReducer from "./movieDetail";

const rootReducer = combineReducers({
  homePage: homePageReducer,
  movieDetail: movieDetailReducer,
});

export default rootReducer;
