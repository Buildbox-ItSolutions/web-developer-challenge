import React from "react";

// CONTEXTS
import { Context } from "../../contexts/Context";
// STYLES
import Container from "./styles";

const AreaPost = () => {
  return (
    <Context.Consumer>
      {(value) => (
        <Container
          placeholder="Mensagem"
          value={value.state.msg}
          onChange={(e) =>
            value.setState({
              image: value.state.image,
              name: value.state.name,
              msg: e.target.value,
            })
          }
        />
      )}
    </Context.Consumer>
  );
};

export default AreaPost;
