import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme.ts";

export default function GlobalProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}