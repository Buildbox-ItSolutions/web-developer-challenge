import React, { useState } from "react";
import deleteIcon from "../../assets/delete (1).svg";
import { PostType } from "../PostType";
import {
  PostContainer,
  PostDisplay,
  DeleteButton,
  PostImage,
  ContentContainer,
  PostMessage,
  EnviadoPor,
  PostName,
  ModalOverlay,
  ModalContent,
  ModalText,
  ModalActions,
  CancelButton,
  DeletePostButton,
} from "./styles";

const Post: React.FC<PostType> = ({ name, message, photoURL, onDelete }) => {
  const [excluirPost, setExcluirPost] = useState(false);

  const handleDelete = () => {
    setExcluirPost(true);
  };

  const handleCancelarExclusao = () => {
    setExcluirPost(false);
  };

  const handleConfirmarExclusao = () => {
    onDelete();
    setExcluirPost(false);
  };

  return (
    <PostContainer>
      <PostDisplay>
        <DeleteButton onClick={handleDelete}>
          <img src={deleteIcon} alt="Delete" />
        </DeleteButton>
        {photoURL && <PostImage src={photoURL} alt="Uploaded Photo" />}
        <ContentContainer>
          <PostMessage>{message}</PostMessage>
          <EnviadoPor>Enviado por</EnviadoPor>
          <PostName>{name}</PostName>
        </ContentContainer>
      </PostDisplay>
      {excluirPost && (
        <ModalOverlay>
          <ModalContent>
            <ModalText>Excluir post?</ModalText>
            <ModalActions>
              <CancelButton onClick={handleCancelarExclusao}>
                Cancelar
              </CancelButton>
              <DeletePostButton onClick={handleConfirmarExclusao}>
                Excluir
              </DeletePostButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </PostContainer>
  );
};

export default Post;
