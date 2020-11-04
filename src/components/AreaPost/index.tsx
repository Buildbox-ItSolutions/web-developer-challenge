import React from "react";

import Container from "./styles";

interface AreaProps {
  placeholder: string;
}

const AreaPost: React.FC<AreaProps> = ({ placeholder }) => (
  <Container placeholder={placeholder}></Container>
);

export default AreaPost;
