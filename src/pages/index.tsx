import Head from "next/head";
import styled from "styled-components";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-top: 2.5rem;
  gap: 3.5rem;
`

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | buildbox</title>
      </Head>
      <Header />

      <Container>
        <Home />

        <Feed />
      </Container>
    </>
  )
}