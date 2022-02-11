import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import { PostContextProvider } from "./contexts/PostContext";
import Head from "./pages/components/Header";
function App() {
  return (
    <PostContextProvider>
      <GlobalStyle />
      <Head />
      <Home />
    </PostContextProvider>
  );
}

export default App;
