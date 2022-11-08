import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  :root {
    height: 100vh;
    background-color: #343434;
  }

  body {
    width: 100%;
    height: 100vh;
  }


  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export default GlobalStyle;
