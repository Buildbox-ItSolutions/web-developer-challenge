import React from "react";
import { Provider } from "react-redux";
import { store } from "./GlobalStates";
import GlobalStyles from "./Config/globalStyles";
import { Home } from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
