import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globals/styles";
import { useContext } from "react";
import { SelectedThemeContext } from "./globals/contexts/theme.context";
import { Posts } from "./features/Posts";

export function App() {
  const { theme } = useContext(SelectedThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Posts />
    </ThemeProvider>
  );
}
