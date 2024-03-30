import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

export const GlobalStyled = createGlobalStyle`


:root {
  font-family: Roboto;
  line-height: 1.5;
  font-weight: 300;

  color: ${theme.colors.text} !important;
}

@media (prefers-color-scheme: light) {
  :root {
    background-color: ${theme.colors.black};
  }
}
`;
