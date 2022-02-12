import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *, body, html {
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        box-sizing: border-box;
    }

    body {
        background-color: #343434;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

`;