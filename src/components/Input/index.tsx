import React from "react";

import { Container } from "./styles";

interface ContainerProps {
  placeholder: string;
}

const NamePost: React.FC<ContainerProps> = ({ placeholder }) => (
  <Container placeholder={placeholder} />
);

export default NamePost;
