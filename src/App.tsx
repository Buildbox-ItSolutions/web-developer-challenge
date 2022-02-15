import React from "react";
import { Header } from "./components/Header";
import { Panel } from "./components/Panel";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Panel />
      <GlobalStyle />
    </>
  );
}

export default App;
