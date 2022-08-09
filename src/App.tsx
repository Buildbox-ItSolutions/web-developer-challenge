import React from "react";
import {
  BrowserRouter as Router,
  // @ts-ignore
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Version1Page from "./pages/version1/Version1Page";
import Version2Page from "./pages/version2/Version2Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/version1">
          <Version1Page />
        </Route>
        <Route path="/version2">
          <Version2Page />
        </Route>
        <Route path="/">
          <Version1Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
