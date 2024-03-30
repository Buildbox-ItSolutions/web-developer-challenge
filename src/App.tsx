import React from 'react';
import { Header, GlobalStyle, Logo, Background, Container } from "./styles";
import Form from './components/Form';
import Feed from './components/Feed';
const imagemLogo = require("./assets/images/logo.png") as string;

function App(): JSX.Element {
  return (
    <>
        <GlobalStyle/>
        <Background>
            <Header>
                <Logo src={imagemLogo} alt="Logo Build Box" />
            </Header>
            <Container>
              <Form/>
              <Feed/>
            </Container>
        </Background>
    </>
  );
}

export default App;
