import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        font-size: 14px;
    }

    body {
        background-color: ${Colors.bgBody};
        height: 100vh;
        width: 100%;
        display: flex;
    }
    #root {
        width: 100%;
    }

`;
