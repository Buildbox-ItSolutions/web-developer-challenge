import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/Default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme} >
            <App />
            <GlobalStyle />
        </ThemeProvider>
    </React.StrictMode>,
);
