import  { createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: "Roboto", sans-serif
  }

  body {
    background-color: ${props => props.theme["gray-600"]};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif
  }
`;
