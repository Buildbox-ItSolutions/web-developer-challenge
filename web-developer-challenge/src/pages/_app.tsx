import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
