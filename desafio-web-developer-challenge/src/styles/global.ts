import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["--gray-700"]};
    color: ${(props) => props.theme["--gray-300"]};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;