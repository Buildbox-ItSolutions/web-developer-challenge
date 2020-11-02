import React from "react";
import { Provider } from "react-redux";
import { store } from "./GlobalStates";
import GlobalStyles from "./Config/globalStyles";
import { Home } from "./Pages/Home";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
