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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/movie-detail" component={MovieDetail} />
        <Route path="/order-page" component={OrderPage} />
        <Route path="/payment-page" component={PaymentPage} />
        <Route path="/profile-page" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
