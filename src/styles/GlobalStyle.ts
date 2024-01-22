import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Roboto;
    font-size: 16px;
    color: #9f9f9f;
    background: #343434;
  }
`