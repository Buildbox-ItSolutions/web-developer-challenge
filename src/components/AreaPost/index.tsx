import React from "react";

import { ContextMsg } from "../../contexts/ContextName";

import Container from "./styles";

const AreaPost = (props: any) => {
  return (
    <ContextMsg.Consumer>
      {(value) => (
        <Container
          placeholder="Mensagem"
          value={value}
          onChange={(e) => props.msgVal(e.target.value)}
        />
      )}
    </ContextMsg.Consumer>
  );
};

export default AreaPost;
