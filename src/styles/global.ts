import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        ${({ theme }) => css`
            background: ${theme['gray-700']};
            color: ${theme['gray-300']};
        `}
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, textarea {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 16px;
        border: 0;
    }

    #root {
        max-width: 516px;
        margin: 0 auto;
        padding: 93px 16px 32px;
    }
    button {
        cursor: pointer;
    }
`;
