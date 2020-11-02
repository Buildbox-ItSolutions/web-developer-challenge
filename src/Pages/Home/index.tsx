import React from "react";
import Logo from "../../assets/logo.png";
import { MdKeyboardArrowUp } from "react-icons/md";

import { Container, Header, UpButtom } from "./styles";
import { FormPosts } from "./components/FormPosts";
import { Feed } from "./components/Feed";
import { HomeController } from "./controllers/homeController";

const Home: React.FC<{ homeController: HomeController }> = ({
  homeController,
}) => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="BuildBox" />
      </Header>
      <FormPosts />
      <Feed />
      <UpButtom
        enabled={homeController.upButtonEnabled}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MdKeyboardArrowUp size={30} />
      </UpButtom>
    </Container>
  );
};

const Wrapper: React.FC = () => {
  const controller = new HomeController();
  return <Home homeController={controller} />;
};

export { Wrapper as Home };
