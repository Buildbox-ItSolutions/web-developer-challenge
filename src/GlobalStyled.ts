import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

export const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, :root {
  font-family: Roboto;
  line-height: 1.5;
  font-weight: 300;
  font-size: 14px;
  color: ${theme.colors.text} !important;
  background-color: ${theme.colors.black};
}
`;
