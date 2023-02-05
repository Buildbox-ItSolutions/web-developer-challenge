import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import { GlobalStyle } from "./global/globalStyle"
import { PostPage } from "./page/postList"

function App() {
  return (
    <>
      <GlobalStyle />
      <PostPage />

      <ToastContainer />
    </>
  )
}

export default App
