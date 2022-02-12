import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
      font-family: sans-serif;
      background: #343434;
  }
  button{
    cursor: pointer;
  }
`;
