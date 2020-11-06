import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyle from "./styles/globals";

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
