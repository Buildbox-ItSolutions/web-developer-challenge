import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
        --color-header:  #2b2b2b;
        --color-body: rgb(52 52 52);
        --border-grey: #3b3b3b;
        --background-card: #313131;
        --background-box: #494949;
        --text-primary: #9f9f9f;
        --text-button: #5f5f5f;
        --text-button-second: #313131;
        --font-primary: Roboto, Arial, Helvetica, sans-serif;
        --color-secondary: #7a7a7a;

    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        
        background-color: var(--color-body);
        font-family: var(--font-primary);
        font-size: .8rem;

    }

    ::placeholder{
        color: var(--text-primary);
    }

    button, input, textarea{
        box-sizing: border-box;
        outline: none;
        width: 100%;
        display: block;
        border: none;
    }

    a {
        text-decoration:none;
    }
`;

export const anime = keyframes`
    to{
        transform: initial;
        opacity: 1;
    }
`;

export const AnimeLeft = styled.div`

    transform: translateX(-20px);
    opacity: 0;
    animation: .4s ${anime} forwards;
`;

export const MainContainer = styled.div`
    max-width: 32.25rem;
    margin:  auto;
    padding: 0 .3rem 1rem;
`;