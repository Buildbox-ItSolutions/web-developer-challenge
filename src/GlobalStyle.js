import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline:none;
    }

    html, body{
        font-family: 'roboto', sans-serif, arial;
        font-size:1rem; 
        background: #343434;
        overflow-x:hidden;
    }

`;

export default GlobalStyle