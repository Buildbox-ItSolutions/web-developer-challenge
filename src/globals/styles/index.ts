import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.page};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
