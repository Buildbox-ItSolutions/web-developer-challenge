import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
/* RESET */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;

    line-height: 1.2;
    letter-spacing: 0em;

    outline: none;

    box-sizing: border-box;
    word-wrap: break-word;
  }

  a {text-decoration: none; color: #ffffff}
  button {background: none; border: none;}
  input {background: none; border: none;}
  img{border: none; max-width: 100%; vertical-align: middle;}

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #343434;
    color: #7a7a7a;
  }
`
