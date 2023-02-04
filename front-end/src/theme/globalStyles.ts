import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`

:root {
  font-size: 62.5%;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;

  a{
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  input {
    outline: none;
  }
}
`