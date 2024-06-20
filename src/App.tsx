import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./core/styles/theme";
import { GlobalStyles } from "./core/styles/global";
import { Main } from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
