import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.gray['600']};
    }

    body * {
        font-family: 'Adobe Clean', sans-serif;
    }

    a {
        color: inherit;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.3);
        }
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
