import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
  --white-100: #ffffff;

  --gray-150: #9f9f9f;
  --gray-200: #494949;
  --gray-250: #313131;
  --gray-700: #343434;
  --gray-710: #313131;
  --gray-800: #2b2b2b;

  --red-200: #C04E2C;

}

  // 15px font-size
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  // 14px font-size
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-710);
    color: var(--gray-150);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
  input, textarea, button {
    border: none;
  }
  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
