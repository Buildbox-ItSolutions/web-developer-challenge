import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color: #9f9f9f;
        background-color: #343434;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        min-width: 320px;
    }

    body::-webkit-scrollbar {
        width: 10px;              
    }

    body::-webkit-scrollbar-track {
        background: #494949;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #2b2b2b;
        border-radius: 26px;
        border: solid 2px #494949;
    }
`
