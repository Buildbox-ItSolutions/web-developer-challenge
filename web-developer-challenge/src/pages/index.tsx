import Head from "next/head";
import { Layout, Card, Row, Col, Typography, Button, Input } from "antd";

const { Text, Paragraph } = Typography;
const { Content } = Layout;

import Header from "./components/Header";
import Form from "./components/Form";

import { ContentContainer } from "@/styles/home";

export default function Home() {
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
        </ContentContainer>
      </Layout>
    </>
  );
}
