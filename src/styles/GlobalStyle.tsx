import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --black: #343434;
        --headerBg: #2b2b2b;
        --cardBg: #313131;
        --border: #3b3b3b;
        --inputField: #494949;
        --primaryGray: #9f9f9f;
        --secondaryGray: #5f5f5f;
        --tertiaryGray: #7a7a7a;
        --buttonReady: #71bb00;
        --white: #ffffff;
        --error: #CF6679;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--black);
        font-size: 1.4rem;
        font-weight: 400;

       input, textarea, button,li {
        all: unset
       }
    }
`
