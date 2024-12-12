import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;    
    }

    body {
        font-size: 16px;
        background: linear-gradient(to right, #e7e7e7, #e7e7e7);
        color: #383838;
    }

    ::-webkit-scrollbar {
        height: 16px;
        width: 16px;
    }

        
    * ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    * ::-webkit-scrollbar-thumb {
        background-color: #A8A8A8;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 16px; 
    }
`;
