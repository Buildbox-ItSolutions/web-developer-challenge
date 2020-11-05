import React from "react";

import { ContextName } from "../../contexts/ContextName";

import Container from "./styles";

const NamePost = (props: any) => {
  return (
    <ContextName.Consumer>
      {(value) => (
        <Container
          placeholder="Nome"
          value={value}
          onChange={(e) => props.nameVal(e.target.value)}
        />
      )}
    </ContextName.Consumer>
  );
};

export default NamePost;
