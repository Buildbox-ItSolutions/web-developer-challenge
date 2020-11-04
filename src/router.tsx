import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />;
    </Switch>
  );
}

export default Routes;
