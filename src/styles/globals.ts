import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
      --color-primary: #343434;
      --color-secundary: #9f9f9f;
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-secundary);

    -webkit-tap-highlight-color: transparent;

    min-width: 320px;
  }

  p,
  label,
  span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button,
  label,
  textarea {
    font: normal 16px "Roboto", sans-serif !important;
  }

  input,
  textarea {
    color: #fff;
  }
`;

export default GlobalStyle;
