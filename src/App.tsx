import React from 'react';
import { Header, GlobalStyle, Background, ImageLogo } from "./styles";
import Publication from './screen/publication';
const logo = require("./assets/images/logo.png") as string;

function App(): JSX.Element {
  return (
    <>
        <GlobalStyle/>
        <Background>
            <Header>
                <ImageLogo width='6.438rem' height='2.813rem' src={logo} alt="Logo Build Box" />
            </Header>
            <Publication/>
        </Background>
    </>
  );
}

export default App;
