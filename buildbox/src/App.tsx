import { ThemeProvider } from "styled-components";
import { HomeScreen } from "./pages/home/home";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeScreen />
    </ThemeProvider>
  );
};
