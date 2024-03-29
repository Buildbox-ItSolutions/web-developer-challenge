import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;