import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    input:-internal-autofill-selected{
      background-color: none !important
    }
    font-family: 'Roboto', sans-serif ;
    line-height: 1.29;
   
    
  }
  *:focus {
    outline: 0;
  }
  html,body, #root {
    height: 100%;
    width: 100%;
    background-color: #343434
  }
  body {
	  color:#A3A3A3;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
  }
  input:-webkit-autofill{
    background-color: red !important;
    background-image: none !important;
    margin:6px;
  }
  a {
    text-decoration: none;
  }
  ul {
    /* list-style: none; */
  }
  button, a {
    cursor: pointer;
  }
 
  
`;
