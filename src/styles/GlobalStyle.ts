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
    color: ${props => props.theme.color.textColor};
    background: ${(props) => props.theme.color.background};
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
