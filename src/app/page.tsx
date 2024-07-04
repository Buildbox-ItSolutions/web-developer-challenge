"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import { defaultTheme } from "./assets/styles/themes/default";
import Posts from "./posts/page";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Posts />
      </ThemeProvider>
    </>
  );
}
