"use client";

import styled from "styled-components";

const Contanier = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 93px);

  background-color: var(--bg-primary);
`;

export default function Home() {
  return <Contanier></Contanier>;
}
