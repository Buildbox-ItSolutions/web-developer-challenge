import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./shared/colors";

function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
