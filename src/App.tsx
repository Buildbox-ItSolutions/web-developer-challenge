import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { StyledMain } from "./components/Main/style";
import { FormPost } from "./components/FormPost";

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <FormPost />
        <Feed />
      </StyledMain>
    </>
  );
}

export default App;
