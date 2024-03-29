import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
div {
  font-family: "Roboto", sans-serif;
  color: black;
}

html,
body {
  background-color: #343434;
}
`

export default GlobalCSS