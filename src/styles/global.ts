import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.gray[700]};
    --webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
