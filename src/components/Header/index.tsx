import React from "react";

import { Container } from "./styles";

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  children,
}) => (
  <Container backgroundColor={backgroundColor}>
    {children}
  </Container>
);

export default Header;
