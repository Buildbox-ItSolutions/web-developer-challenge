import React from "react";
import { DisplayBoxInput } from "./components/DisplayBoxInput";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { ManagerProvider } from "./contex";
import { Container, ContainerBody } from "./styles/style";

function App() {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <ManagerProvider>
          <DisplayBoxInput />
          <Feed />
        </ManagerProvider>
      </ContainerBody>
    </Container>
  );
}

export default App;
