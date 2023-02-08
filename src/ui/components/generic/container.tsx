import styled from "styled-components";
import { containerType } from "../../../@types/home/ui/genericUiTypes";

//Container genérico para usos gerais.
//General purpose generic container.

export const Container = styled.div<containerType>`
  ${(props) => props.font}
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "0")};
  left: ${(props) => (props.left ? props.left : "0")};
  right: ${(props) => (props.right ? props.right : "0")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => (props.margin ? props.margin : "none")};
  padding: ${(props) => (props.padding ? props.padding : "none")};
  align-items: ${(props) => (props.vAlign ? props.vAlign : "none")};
  justify-content: ${(props) => (props.hAlign ? props.hAlign : "none")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};

  //Responsividade para o conteiner da imagem deletar post.
  //Responsiveness to image container delete post.

  &#deleteImageContainer {
    @media screen and (max-width: 516px) {
      width: 100%;
    }
  }

  //Responsividade da imagem da lixeira.
  //Trash image responsiveness.

  &#trashImageContainer {
    @media screen and (max-width: 516px) {
      left: auto;
      right: 25%;
    }
    @media screen and (max-width: 400px) {
      left: auto;
      right: 20%;
    }
    @media screen and (max-width: 260px) {
      left: auto;
      right: 8%;
    }
  }

  //Responsividade do título Feed.
  //Feed title responsiveness.

  &#containerFeed {
    @media screen and (max-width: 516px) {
      margin-left: 5%;
    }
  }
`;
