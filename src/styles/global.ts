import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root{
        --background: #343434;
        --border: #3b3b3b;
        --black-50: #313131;
        --black-100: #2b2b2b;
        --gray-50: #9f9f9f;
        --gray-100: #7a7a7a;
        --gray-200: #5f5f5f;
        --green: #71BB00;
        --red: #B95125;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        background-color: var(--background);
        color: var(--gray-50);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, input, button {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media (max-width: 1080px){
            font-size: 93.5%;
        }
        @media (max-width: 720px){
            font-size: 86.5%;
        }
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    
    button{
        cursor: pointer;
        border: none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles