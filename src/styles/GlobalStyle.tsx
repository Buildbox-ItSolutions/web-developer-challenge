import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.black};
        font-size: 1.4rem;
        font-weight: 400;

       input, textarea, button {
        all: unset
       }
    }
`
