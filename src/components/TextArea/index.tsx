import React from "react";

import { Container } from "./styles";

interface ContainerProps {
  placeholder: string;
}

const AreaPost: React.FC<ContainerProps> = ({ placeholder }) => (
  <Container placeholder={placeholder} />
);

export default AreaPost;
