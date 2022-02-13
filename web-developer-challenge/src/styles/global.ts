import { createGlobalStyle } from 'styled-components';
import colorPalette from "./colorPalette";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: none;
        border: none;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: ${colorPalette.black300};
        color: ${colorPalette.white};
    }
`