import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { SelectedThemeContextProvider } from "./globals/contexts/theme.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedThemeContextProvider>
      <App />
    </SelectedThemeContextProvider>
  </React.StrictMode>
);
