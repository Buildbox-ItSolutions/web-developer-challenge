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
    }
    button {
        all: unset;

        :hover{
            cursor: pointer;
        }
    }
    a {
        all: unset;
        cursor: pointer;
        width: 100%;
    }
    #root {
        width: 100%;
    }
    

`;
