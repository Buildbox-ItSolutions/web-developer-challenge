// const [count, setCount] = useState(0);

import "./App.css";
// import Home from "./pages/Home";

// function App() {

//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;
import React from "react";
import { Provider } from "react-redux";
import store from "./storage/store"; // Importe sua loja Redux
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Envolve sua aplicação com o Provider e fornece a loja Redux */}
      <Home />
    </Provider>
  );
}

export default App;
