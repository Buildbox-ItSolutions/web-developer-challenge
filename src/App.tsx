import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { DefaultLayout } from "./layouts/default-layout";
import { HomePage } from "./pages/home";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </ThemeProvider>
  );
}

