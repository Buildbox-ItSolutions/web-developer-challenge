import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import { makeServer } from "@/services/mirage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />;
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
