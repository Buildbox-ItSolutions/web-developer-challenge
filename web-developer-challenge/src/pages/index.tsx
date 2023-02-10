import { useState, useEffect } from "react";

import Head from "next/head";
import { Layout } from "antd";

import Header from "./components/Header";
import Form from "./components/Form";
import Feed from "./components/Feed";

import { ContentContainer, SpinContainer } from "@/styles/home";

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
