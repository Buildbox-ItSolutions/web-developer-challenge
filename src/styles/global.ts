import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #343434;
        font-size: 14px;
        color: #9f9f9f;
        font-family: sans-serif;
    }
`