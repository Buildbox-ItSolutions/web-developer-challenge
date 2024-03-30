import styled from "styled-components";
import "./App.css";
import Home from "./views/Home";

const AppContainer = styled.div`
  background-color: var(--base-light);
  width: 100dvw;
  height: 100dvh;
`;

function App() {
  return (
    <AppContainer>
      <Home></Home>
    </AppContainer>
  );
}

export default App;
