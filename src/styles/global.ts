import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    &:root {
        --color-green: #71bb00;
        --color-orange: #d65923;
        --color-gray-25: #9f9f9f;
        --color-gray-50: #707070;
        --color-gray-100: #5f5f5f;
        --color-gray-125: #7a7a7a;
        --color-gray-150: #4b4b4b;
        --color-gray-175: #494949;
        --color-gray-200: #3b3b3b;
        --color-gray-300: #343434;
        --color-gray-350: #313131;
        --color-gray-500: #2b2b2b;
    };

    body {
        background: var(--color-gray-300);
    }

    button {
        cursor: pointer;
    };

    input {
        outline: none;
        border: none;
    };

    a {
        color: inherit;
        text-decoration: none;
    };

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    };

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    };
`;
