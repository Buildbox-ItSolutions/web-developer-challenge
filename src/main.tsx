import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  @font-face {
        font-family: 'SF Pro Display';
        src: url('/fonts/SFProDisplay-Regular.woff2') format('woff2'),
          url('/fonts/SFProDisplay-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Black.woff2') format('woff2'),
      url('/fonts/SFProDisplay-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Light.woff2') format('woff2'),
      url('/fonts/SFProDisplay-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
