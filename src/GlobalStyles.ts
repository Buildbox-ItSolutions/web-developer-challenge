import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: gray;
  }

  p {
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
