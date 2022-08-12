import { ThemeProvider } from "styled-components";
import { theme } from "src/theme";
import GlobalStyle from "src/theme/GlobalStyle";

import { Header } from "src/components";
import Blog from "src/pages/Blog/Blog";

import { Container } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <Container>
        <Header />
        <Blog />
      </Container>
    </ThemeProvider> 
  );
}
