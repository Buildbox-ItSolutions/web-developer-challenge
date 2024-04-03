import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { deafultTheme } from "./theme/defaultTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider theme={deafultTheme}>
      <App />
    </ThemeProvider>
  </>
);
