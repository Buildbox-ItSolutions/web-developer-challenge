import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import GlobalStyle from "../theme/GlobalStyle";

import { Header } from "../components";
import Blog from "../pages/Blog/Blog";

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
