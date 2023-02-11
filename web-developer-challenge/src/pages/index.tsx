//import nextjs head
import Head from "next/head";

//importação de componentes do antd
import { Layout } from "antd";

//importação de componentes
import Header from "./components/Header";
import Form from "./components/Form";
import Feed from "./components/Feed";

//importação de estilos do styled-components
import { ContentContainer, SpinContainer } from "@/styles/home";

//importação de hooks
import { useFeed } from "@/services/hooks/useFeed";

export default function Home() {
  const { isLoading } = useFeed();

  return (
    <>
      <Head>
        <title>Desafio Web Dev</title>
        <meta name="description" content="Desafio webdev buildbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favcon.png" />
      </Head>
      <Layout>
        <Header />
        <ContentContainer>
          <Form />
          {isLoading ? <SpinContainer size="large" /> : <Feed />}
        </ContentContainer>
      </Layout>
    </>
  );
}
