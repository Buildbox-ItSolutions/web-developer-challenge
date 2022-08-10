import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    min-height: 100%;
    background-color: #343434;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
