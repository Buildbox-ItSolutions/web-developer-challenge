import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  margin:auto;
}

.card {
  padding: 2em;
}

:root {
  font-family: Roboto;
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87) !important;
}

@media (prefers-color-scheme: light) {
  :root {
    background-color: #343434;
  }

}
`;
