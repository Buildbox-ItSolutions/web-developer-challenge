import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme.ts";
import PostsProvider from "./context/PostsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
