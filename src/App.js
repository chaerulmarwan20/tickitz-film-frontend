import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeviceId from "./pages/DeviceId";
import DeviceId2 from "./pages/DeviceId2";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DeviceId} />
        <Route path="/device-id" component={DeviceId2} />
      </Switch>
    </Router>
  );
}
export default App;
