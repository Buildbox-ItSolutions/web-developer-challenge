import React from "react";

// CONTEXTS
import { Context } from "../../contexts/Context";
// STYLES
import Container from "./styles";

// TYPES
interface BtnPostTypes {
  title: string;
  children: string;
}

const ButtonPost = (props: BtnPostTypes) => {
  const verifyDisable = (image: string, name: string, msg: string) => {
    if (props.title === "Publicar") {
      return image === "" || name === "" || msg === "";
    } else {
      return image === "" && name === "" && msg === "";
    }
  };

  return (
    <Context.Consumer>
      {(value) => (
        <Container
          title={props.title}
          disabled={verifyDisable(
            value.state.image,
            value.state.name,
            value.state.msg
          )}
        >
          {props.title}
        </Container>
      )}
    </Context.Consumer>
  );
};

export default ButtonPost;
