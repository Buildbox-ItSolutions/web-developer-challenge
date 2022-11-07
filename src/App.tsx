import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./shared/colors";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <GlobalStyle />
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
