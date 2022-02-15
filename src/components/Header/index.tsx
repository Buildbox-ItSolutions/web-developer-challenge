import React from "react";

import { Container } from "./styles";

import logoImg from "../../assets/images/bx-logo.svg";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Logo Buildbox challenge" />
    </Container>
  );
}
