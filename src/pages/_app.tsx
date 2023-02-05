import React from "react";
import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";

import { GlobalStyle } from "@/styles/global";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
