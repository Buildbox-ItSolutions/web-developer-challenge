import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/Home/Header/Header";
import { Home } from "./components/Home/Home";
import { store } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Home></Home>
      </Provider>
    </>
  );
}

export default App;
