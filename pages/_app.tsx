import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #343434;
        font-family: "Roboto", arial, helvetica, sans-serif;
        padding: 0;
        margin: 0;
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>

  )
}

export default MyApp
