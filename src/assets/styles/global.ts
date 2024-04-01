import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text[500]};
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  /* @media (max-width: 640px) {
    html {
      font-size: 50%;
    }
  } */
`;
