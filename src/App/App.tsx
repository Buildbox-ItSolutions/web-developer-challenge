import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import GlobalStyle from "../theme/GlobalStyle";

import { Container } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <Container>
        Challenge
      </Container>
    </ThemeProvider> 
  );
}
