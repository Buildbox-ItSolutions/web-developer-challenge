import Head from "next/head";
import { Layout, Card, Row, Col, Typography, Button, Input, Form } from "antd";

const { Text, Paragraph } = Typography;
const { Content } = Layout;

import Header from "./components/Header";

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
        <Content></Content>
      </Layout>
    </>
  );
}
