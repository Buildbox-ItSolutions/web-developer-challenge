import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";

export const GlobalStyles = createGlobalStyle<ThemeProps>`
*{
padding: 0;
margin: 0;
font-family: 'Roboto', sans-serif;
color: ${(props) => props.theme.text500};
box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.gray400};
}
`;
