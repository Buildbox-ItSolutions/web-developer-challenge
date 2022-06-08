import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <title>BuildBox - Web Challenge</title>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </ThemeProvider>
  );
}

export default MyApp;
