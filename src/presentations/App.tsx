import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Version1Page from "./pages/version1/Version1Page";

function App() {
  return (
    <>
      <h1>App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Version1Page />} />
          {/* <Route path="/version1">
            <Version1Page />
          </Route>
          <Route path="/version2">
            <Version2Page />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
