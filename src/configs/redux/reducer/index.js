import { combineReducers } from "redux";
import homePageReducer from "./homePage";
import movieDetailReducer from "./movieDetail";
import allMoviesShowingReducer from "./allMoviesShowing";
import allMoviesUpcomingReducer from "./allMoviesUpcoming";
import orderHistoryReducer from "./orderHistory";

const rootReducer = combineReducers({
  homePage: homePageReducer,
  movieDetail: movieDetailReducer,
  allMoviesShowing: allMoviesShowingReducer,
  allMoviesUpcoming: allMoviesUpcomingReducer,
  orderHistory: orderHistoryReducer,
});

export default rootReducer;
