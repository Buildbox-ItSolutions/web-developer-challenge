"use client";

import Form from "@/components/Form";
import styled from "styled-components";
import { roboto } from "@/styles/fonts";

const Contanier = styled.main`
  display: flex;
  justify-content: center;

  padding: 41px 0;
  min-height: calc(100vh - 93px);

  font-size: 14px;

  background-color: var(--bg-primary);

  @media (max-width: 560px) {
    padding: 0;
  }
`;

export default function Home() {
  return (
    <Contanier className={roboto.className}>
      <Form />
    </Contanier>
  );
}
