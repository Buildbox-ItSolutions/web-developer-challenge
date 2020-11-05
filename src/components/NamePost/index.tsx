import React from "react";

// CONTEXTS
import { Context } from "../../contexts/Context";
// STYLES
import Container from "./styles";

const NamePost = () => {
  return (
    <Context.Consumer>
      {(value) => (
        <Container
          placeholder="Nome"
          value={value.state.name}
          onChange={(e) =>
            value.setState({
              image: value.state.image,
              name: e.target.value,
              msg: value.state.msg,
            })
          }
        />
      )}
    </Context.Consumer>
  );
};

export default NamePost;
