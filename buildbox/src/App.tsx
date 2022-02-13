import Form from "./components/Form";
import Header from "./components/Header";
import { MainContainer } from "./global";
import Feed from "./components/Feed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MainContainer>
      <Header />
      <ToastContainer
        theme="colored"
        position="top-center"
        className="toast"
        autoClose={2000}
      />
      <Form />
      <Feed />
    </MainContainer>
  );
}

export default App;
