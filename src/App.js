import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
