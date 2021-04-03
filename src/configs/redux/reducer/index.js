import { combineReducers } from "redux";
import userReducer from "./user";
import locationReducer from "./location";
import homePageReducer from "./homePage";
import movieDetailReducer from "./movieDetail";
import allMoviesShowingReducer from "./allMoviesShowing";
import allMoviesUpcomingReducer from "./allMoviesUpcoming";
import orderHistoryReducer from "./orderHistory";
import scheduleReducer from "./schedule";
import orderReducer from "./order";

const rootReducer = combineReducers({
  user: userReducer,
  location: locationReducer,
  homePage: homePageReducer,
  movieDetail: movieDetailReducer,
  allMoviesShowing: allMoviesShowingReducer,
  allMoviesUpcoming: allMoviesUpcomingReducer,
  orderHistory: orderHistoryReducer,
  schedule: scheduleReducer,
  order: orderReducer,
});

export default rootReducer;
