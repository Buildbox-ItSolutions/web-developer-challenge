import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  backgroundColor: string;
  hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  hoverColor,
  children,
}) => (
  <Container backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}
  </Container>
);

export default Button;
