import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif; 
        color: #fff;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: #323232;
    }
    #root{
         width: 100%;
    }
 `;

export { GlobalStyles };
