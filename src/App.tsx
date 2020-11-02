import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
import Routes from "./router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
