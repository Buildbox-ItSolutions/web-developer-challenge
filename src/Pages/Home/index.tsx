import React from "react";
import Logo from "../../assets/logo.png";

import { Container, Header, Comments } from "./styles";
import { FormPosts } from "./components/FormPosts";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="BuildBox" />
      </Header>
      <FormPosts />

      <Comments></Comments>
    </Container>
  );
};

const Wrapper: React.FC = () => {
  return <Home />;
};

export { Wrapper as Home };
