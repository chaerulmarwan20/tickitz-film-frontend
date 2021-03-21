import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistory from "./pages/OrderHistory";
import TicketResult from "./pages/TicketResult";
import AllMoviesShowing from "./pages/AllMoviesShowing";
import AllMoviesUpcoming from "./pages/AllMoviesUpcoming";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/sign-in" component={Signin} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/movie-detail/:id" component={MovieDetail} />
        <Route path="/order-page" component={OrderPage} />
        <Route path="/payment-page" component={PaymentPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/ticket-result" component={TicketResult} />
        <Route path="/all-movies-showing" component={AllMoviesShowing} />
        <Route path="/all-movies-upcoming" component={AllMoviesUpcoming} />
      </Switch>
    </Router>
  );
}

export default App;
