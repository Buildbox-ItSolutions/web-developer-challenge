import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  
}

.card {
  padding: 2em;
}

:root {
  font-family: Roboto;
  line-height: 1.5;
  font-weight: 300;

  color: #9f9f9f !important;
}

@media (prefers-color-scheme: light) {
  :root {
    background-color: #343434;
  }

}
`;
