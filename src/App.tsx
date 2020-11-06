import React, { useState } from "react";

// CONTEXTS
import { Context } from "./contexts/ContextData";
import { ContextImage } from "./contexts/ContextImage";
// PAGES
import Main from "./pages";
// STYLES
import "./styles/globals.ts";

function App() {
  const [state, setState] = useState({ image: "", name: "", msg: "" });
  const [stateImg, setStateImg] = useState({ status: false, image: "" });

  return (
    <Context.Provider value={{ state, setState }}>
      <ContextImage.Provider value={{ stateImg, setStateImg }}>
        <Main />
      </ContextImage.Provider>
    </Context.Provider>
  );
}

export default App;
