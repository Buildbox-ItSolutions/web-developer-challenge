import React from "react";

import BxLogo from "../images/Header/bx-logo.png";
import PostImage from "../images/ImgPost/post-image.png";

// STYLED
import { BoxBody, ButtonsPost } from "../styles/components/styled";
// COMPONENTS
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import ImgPost from "../components/ImgPost";
import NamePost from "../components/NamePost";
import AreaPost from "../components/AreaPost";
import ButtonPost from "../components/ButtonPost";

const Main = () => {
  return (
    <React.Fragment>
      <Header>
        <img src={BxLogo} className="bx-logo" alt="Logo" />
      </Header>
      <BoxBody>
        <CreatePost>
          <ImgPost>
            <label htmlFor="inppost">
              <img src={PostImage} alt="Post" />
              <input id="inppost" type="file" accept="image/*" />
            </label>
          </ImgPost>

          <NamePost placeholder="Digite seu nome" />
          <AreaPost placeholder="Mensagem" />

          <ButtonsPost>
            <ButtonPost disabled={false} title="Descartar">
              Descartar
            </ButtonPost>
            <ButtonPost disabled={true} title="Publicar">
              Publicar
            </ButtonPost>
          </ButtonsPost>
        </CreatePost>
      </BoxBody>
    </React.Fragment>
  );
};

export default Main;
