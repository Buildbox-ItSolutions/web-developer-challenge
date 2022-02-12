import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next  {
    height: 100%;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #343434;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
  }
  input {
    border: none;
    outline: none;
  }
`
