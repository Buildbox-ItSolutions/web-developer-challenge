import React, { useState } from "react";

// CONTEXTS
import { Context } from "./contexts/ContextData";
import { ContextImage } from "./contexts/ContextImage";
import { ContextFeed } from "./contexts/ContextFeed";
// PAGES
import Main from "./pages";
// STYLES
import "./styles/globals.ts";
import "cropperjs/dist/cropper.css";

function App() {
  const [state, setState] = useState({ image: "", name: "", msg: "" });
  const [stateImg, setStateImg] = useState({ status: false, image: "" });
  const [stateFeed, setStateFeed] = useState({ status: false });

  return (
    <Context.Provider value={{ state, setState }}>
      <ContextImage.Provider value={{ stateImg, setStateImg }}>
        <ContextFeed.Provider value={{ stateFeed, setStateFeed }}>
          <Main />
        </ContextFeed.Provider>
      </ContextImage.Provider>
    </Context.Provider>
  );
}

export default App;
