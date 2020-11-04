import React from "react";

import Container from "./styles";

interface NameProps {
  placeholder: string;
}

const NamePost: React.FC<NameProps> = ({ placeholder }) => (
  <Container placeholder={placeholder}></Container>
);

export default NamePost;
