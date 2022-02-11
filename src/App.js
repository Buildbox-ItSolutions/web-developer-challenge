import { Toaster } from "react-hot-toast";
import Feed from "./components/Feed";
import Form from "./components/Form";
import Header from "./components/Header";
import { PostsContextProvider } from "./store/post-context";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PostsContextProvider>
        <Form />
        <Feed />
      </PostsContextProvider>
      <Toaster
        toastOptions={{
          style: { fontSize: "1rem" },
        }}
      />
    </>
  );
}

export default App;
