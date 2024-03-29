import React from 'react';
import { Header, GlobalStyle, Logo, Background } from "./styles";
import Form from './components/Form/Form';
const imagemLogo = require("./assets/images/logo.png") as string;

function App(): JSX.Element {
  return (
    <>
        <GlobalStyle/>
        <Background>
            <Header>
                <Logo src={imagemLogo} alt="Logo Build Box" />
            </Header>
            <Form/>
        </Background>
    </>
  );
}

export default App;
