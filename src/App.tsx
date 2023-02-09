import { GlobalStyles } from "./styledComponents";
import styled from "styled-components";
import Navbar from "./components/Navbar";

import Feed from "./pages/Feed/Feed";

const AppContainer = styled.div`
  height: 100vh;
  padding-top: ${(props) => props.theme.navbarHeight};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Feed />
      </AppContainer>
    </>
  );
}

export default App;
