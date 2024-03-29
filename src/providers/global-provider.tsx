import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme.ts";
import DataProvider from "./data.provider.tsx";

export default function GlobalProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={ theme }>
      <DataProvider>
        { children }
      </DataProvider>
    </ThemeProvider>
  )
}