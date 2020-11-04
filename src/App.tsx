import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
import Routes from "./router";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
