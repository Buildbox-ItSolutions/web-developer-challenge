import React, { useState } from "react";

// CONTEXTS
import { Context } from "./contexts/Context";
// PAGES
import Main from "./pages";
// STYLES
import "./styles/globals.ts";

function App() {
  const [state, setState] = useState({ image: "", name: "", msg: "" });

  return (
    <Context.Provider value={{ state, setState }}>
      <Main />
    </Context.Provider>
  );
}

export default App;
