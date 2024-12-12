import React, { useContext } from "react";

// CONTEXTS
import { Context } from "../../contexts/ContextData";
// STYLES
import Container from "./styles";

const NamePost = () => {
  const ContData = useContext(Context);

  return (
    <Container
      placeholder="Nome"
      value={ContData.state.name}
      onChange={(e) =>
        ContData.setState({
          image: ContData.state.image,
          name: e.target.value,
          msg: ContData.state.msg,
        })
      }
    />
  );
};

export default NamePost;
