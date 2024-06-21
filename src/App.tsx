import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globals/styles";
import { useContext } from "react";
import { SelectedThemeContext } from "./globals/contexts/theme.context";

export function App() {
  const { theme, toggleTheme } = useContext(SelectedThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello world</h1>
      <button onClick={toggleTheme}>TOGGLE</button>
    </ThemeProvider>
  );
}
