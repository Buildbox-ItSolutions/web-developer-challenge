import React from "react";
import { Provider } from "react-redux";
import { store } from "./GlobalStates";

function App() {
  return (
    <div className="App">
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
