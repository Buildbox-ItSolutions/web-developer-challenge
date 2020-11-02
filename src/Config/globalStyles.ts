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
  

    ::-webkit-scrollbar {
      width: 5px;              
    }
    ::-webkit-scrollbar-track {
      background: #2b2b2b;       
    }
    ::-webkit-scrollbar-thumb {
      background-color: #4b4b4b;    
      border-radius: 10px;      
     
    }

    
    
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
    overflow-y:auto;
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
  h1, h2, h3{
	  color:#4687AE;
	  margin-bottom:15px;
  }
  p{
	  font-size:14px;
	  line-height: 1.5em;
  }
  
`;
