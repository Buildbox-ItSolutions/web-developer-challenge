import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    :root {
        --background: #343434;
        --backgroundInput: #494949;
        --lightgrey: #9f9f9f;
        --background-500: #2b2b2b;
        --background--400: #313131;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    body {
        background-color: var(--background);
        --webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    input, textarea {
        background-color: var(--backgroundInput);
    }
    p {
        color: var(--lightgrey);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
`;
