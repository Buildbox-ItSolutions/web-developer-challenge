import React from "react";
import { CardFooter, Container, Content } from "./styles";
import logo from "../../assets/images/logo.svg";
import { TrashIcon } from "../Icons";

interface Props {
  children?: React.ReactNode;
}

const PostCard: React.FC<Props> = () => {

  return (
    <>
      <Container>
        <img
          src={logo}
          alt="post-image"
          className="post-image"
        />
        <button
          type="button"
          className="trash-button"
        >
          <TrashIcon className="w-6 h-6 " />
        </button>
        <Content>
          <input type="text" className="post-title-input" placeholder="Digite seu nome" />
          <input type="text" name="message" className="post-message" placeholder="Mensagem" />
        </Content>
        <CardFooter>
          <button onClick={() => console.log('teste')} className="remove-button">
            <u>Descartar</u>
          </button>
          <button onClick={() => console.log('saved')} className="publish-button">
            Publicar
          </button>
        </CardFooter>
      </Container>
    </>
  )
}
PostCard.displayName = 'PostCard';
export type PostCardProps = Props;
export default PostCard;
