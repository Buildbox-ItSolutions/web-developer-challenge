import { colors } from './../themes/colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;
  }
  #root {
    min-height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background: ${colors.background};
  }
`;
