import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./configs/globalStyle";
import theme from "./configs/theme";
import router from "./routes";
import { FormContextProvider } from "./store";
import { PostContextProvider } from "./store/PostContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <PostContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </PostContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);
