import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PublicRoute from "./module/PublicRoute";
import PrivateRoute from "./module/PrivateRoute";

import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import ForgotPassword from "../../pages/ForgotPassword";
import Homepage from "../../pages/Homepage";
import AllMoviesShowing from "../../pages/AllMoviesShowing";
import AllMoviesUpcoming from "../../pages/AllMoviesUpcoming";
import MovieDetail from "../../pages/MovieDetail";
import OrderPage from "../../pages/OrderPage";
import PaymentPage from "../../pages/PaymentPage";
import ProfilePage from "../../pages/ProfilePage";
import OrderHistory from "../../pages/OrderHistory";
import TicketResult from "../../pages/TicketResult";
import AdminPage from "../../pages/AdminPage";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/sign-in" component={Signin} />
        <PublicRoute path="/sign-up" component={Signup} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/" component={Homepage} />
        <Route path="/all-movies-showing" component={AllMoviesShowing} />
        <Route path="/all-movies-upcoming" component={AllMoviesUpcoming} />
        <PrivateRoute path="/movie-detail/:id" component={MovieDetail} />
        <PrivateRoute path="/order-page" component={OrderPage} />
        <PrivateRoute path="/payment-page" component={PaymentPage} />
        <PrivateRoute path="/profile-page" component={ProfilePage} />
        <PrivateRoute path="/order-history" component={OrderHistory} />
        <PrivateRoute path="/ticket-result" component={TicketResult} />
        <PrivateRoute path="/admin-page" component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
