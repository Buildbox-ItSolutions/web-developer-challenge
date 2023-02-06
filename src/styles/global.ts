import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   :focus {
      outline: 0;
      box-shadow: 0 0 0 2px #7C7C8A;
    }

    body {
      background-color: #202024;
      color: #E1E1E6;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1rem Roboto, sans-serif;
    }
`