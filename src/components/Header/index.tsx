import React from "react";

import { Container } from "./styles";

const Header: React.FC = ({
  children,
}) => (
  <Container>
    {children}
  </Container>
);

export default Header;
