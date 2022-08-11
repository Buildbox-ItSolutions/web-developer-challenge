import React from "react";

import { Container, Logo } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src="assets/images/logo.png" alt="logo" />
    </Container>
  );
};
