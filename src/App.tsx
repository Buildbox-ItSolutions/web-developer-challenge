import { PostsProvider } from "./context/post-context";
import GlobalStyles from "./styles/global";
import { Main } from "./view";

function App() {
  return (
    <PostsProvider>
      <GlobalStyles />
      <Main />
    </PostsProvider>
  );
}

export default App;
