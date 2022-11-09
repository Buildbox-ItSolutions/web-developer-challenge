import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global";
import { PostProvider } from "../context/PostContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
      
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;