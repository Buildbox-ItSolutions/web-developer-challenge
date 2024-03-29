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
div,
input,
button,
textarea,
select {
  font-family: "Roboto", sans-serif;
  color: white;
}

html,
body {
  background-color: #343434;
}
`

export default GlobalCSS