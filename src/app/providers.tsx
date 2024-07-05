"use client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/themes/default";
import { StyledComponentsRegistry } from "@/lib/registry";
import GlobalStyle from "./assets/styles/global";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
