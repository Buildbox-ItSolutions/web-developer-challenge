import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';

import reset from 'styled-reset';
import { theme } from '@/theme';
import store from '@/store';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
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
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
