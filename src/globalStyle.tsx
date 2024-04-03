import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background-color:#343434;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}
a,button,textarea,input{
  font-family: "Roboto", sans-serif;
}
.post-container{
  display:flex;
  justify-content:center;
  h3{
  font-size:.875rem;
  color:#7a7a7a;
  line-height:18px;
  margin-bottom:8px;
  font-weight:500;
}
  
}
section{
margin-top: 2.5rem;
}

`;
