//importação estilos globais
import { GlobalStyle } from "../styles/global";

//importação de bibliotecas
import type { AppProps } from "next/app";

//importação de estilos do antd
import "antd/dist/reset.css";

//importação do miragejs
import { makeServer } from "@/services/mirage";

//importação do react-query
import { QueryClientProvider, QueryClient } from "react-query";

//importação do react-query devtools para manipular o fetch dos dados
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
