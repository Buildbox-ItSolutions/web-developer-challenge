import React, { useContext } from "react";

// CONTEXTS
import { Context } from "../../contexts/ContextData";
// STYLES
import Container from "./styles";

const AreaPost = () => {
  const ContData = useContext(Context);

  return (
    <Container
      placeholder="Mensagem"
      value={ContData.state.msg}
      onChange={(e) =>
        ContData.setState({
          image: ContData.state.image,
          name: ContData.state.name,
          msg: e.target.value,
        })
      }
    />
  );
};

export default AreaPost;
