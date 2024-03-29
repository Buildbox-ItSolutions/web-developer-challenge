import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer 
        theme="dark"
        autoClose={3000}
      />
      <Home />
    </>
  );
}
