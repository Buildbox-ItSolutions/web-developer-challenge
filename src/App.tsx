import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Home/Header/Header";
import { Home } from "./components/Home/Home";
import { store } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
