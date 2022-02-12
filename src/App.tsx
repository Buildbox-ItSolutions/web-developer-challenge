import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { RoutesComponent } from "./routes";
import Global from "./styles/global";
import theme from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <RoutesComponent />
        <Global />
        <ToastContainer autoClose={3000} hideProgressBar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
