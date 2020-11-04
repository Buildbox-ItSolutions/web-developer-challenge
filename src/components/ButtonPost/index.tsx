import React from "react";

import Container from "./styles";

interface AreaProps {
  title: string;
  disabled: boolean;
}

const ButtonPost: React.FC<AreaProps> = ({ title, disabled }) => (
  <Container title={title} disabled={disabled}>
    {title}
  </Container>
);

export default ButtonPost;
