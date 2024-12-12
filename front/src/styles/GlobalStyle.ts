import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        /* height: 100%; */
        width: 100%;
    }
    *, button, input{
        border: 0;
        font-family: 'Roboto', sans-serif;
    }
    body, #root{
        background-color: var(--main-bg);
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    :root{
        --title: #71bb00;
        --header-bg: #2b2b2b;
        --main-bg: #343434;
        --box-bg: #313131;
        --gray: #555555;
        --light-gray: #747474;
        --dark-gray: #494949;
        --font: #8a8a8a;
    }
`;