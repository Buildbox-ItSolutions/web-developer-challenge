import React, { useContext } from "react";

// CONTEXTS
import { Context } from "../../contexts/ContextData";
import { ContextFeed } from "../../contexts/ContextFeed";
// STYLES
import Container from "./styles";

const ButtonDsc = () => {
  const ContData = useContext(Context);

  const verifyDisable = () => {
    return (
      ContData.state.image === "" &&
      ContData.state.name === "" &&
      ContData.state.msg === ""
    );
  };

  return (
    <Container
      title="Descartar"
      disabled={verifyDisable()}
      onClick={() =>
        !verifyDisable() && ContData.setState({ image: "", name: "", msg: "" })
      }
    >
      Descartar
    </Container>
  );
};

const ButtonPbc = () => {
  const ContData = useContext(Context);
  const ContFeed = useContext(ContextFeed);

  const verifyDisable = () => {
    return (
      ContData.state.image === "" ||
      ContData.state.name === "" ||
      ContData.state.msg === ""
    );
  };

  return (
    <Container
      title="Publicar"
      disabled={verifyDisable()}
      onClick={() => !verifyDisable() && ContFeed.setStateFeed({ status: true })}
    >
      Publicar
    </Container>
  );
};

export { ButtonDsc, ButtonPbc };
