import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import { PostProvider } from "../context/postContext";

export const theme: DefaultTheme = {
  colors: {
    black: "#000",
    white: "#FFF",
    orange: "#CF5724",

    "green-50": "#D3F79C",
    "green-300": "#71BB00",
    "green-600": "#518501",

    "gray-100": "#2B2B2B",
    "gray-200": "#313131",
    "gray-300": "#343434",
    "gray-400": "#3B3B3B",
    "gray-500": "#494949",
    "gray-550": "#4B4B4B",
    "gray-600": "#5F5F5F",
    "gray-700": "#7A7A7A",
    "gray-800": "#9F9F9F",
  },
  device: {
    mobile: "(min-width: 640px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
