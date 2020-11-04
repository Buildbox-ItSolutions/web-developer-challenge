import React from "react";
import styled from "styled-components";

import BxLogo from "../images/Header/bx-logo.png";
import PostImage from "../images/ImgPost/post-image.png";

import Header from "../components/Header";
import ImgPost from "../components/ImgPost";
import NamePost from "../components/Input";
import AreaPost from "../components/TextArea";

const BoxBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreatePost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 516px;
  border-radius: 3px;
  background-color: #3b3b3b;
  margin: 30px 30px 0px;
  padding: 1rem;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    margin: 10px 10px 0px;
  }
`;

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
        </CreatePost>
      </BoxBody>
    </React.Fragment>
  );
};

export default Main;
