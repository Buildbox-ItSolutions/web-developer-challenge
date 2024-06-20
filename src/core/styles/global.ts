import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  "*": {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "62.5%",
    scrollBehavior: "smooth",
  },
  body: {
    fontFamily: "Roboto, sans-serif",
    backgroundColor: theme.background.body,
  },
}));
