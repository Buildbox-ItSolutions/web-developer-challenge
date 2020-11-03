import React, { useState } from 'react';
import {
  Container,
  NameInput,
  MessageInput,
  DiscardButton,
  PublishButton,
  FooterContainer,
  Spinner,
} from './styles';
import Thumbnail from '../Thumbnail';
import { usePost } from '../../contexts/Post';
import { useFeed } from '../../contexts/Feed';

const AddPostForm = () => {
  const { name, message, thumbUrl, setName, setMessage, clearPost } = usePost();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addPost } = useFeed();
  const validateForm = () => name !== '' && message !== '' && thumbUrl !== '';
  const isFormValid = validateForm();

  const handlePublish = async () => {
    if (isFormValid) {
      setIsLoading(true);
      const post = { name, message, thumbUrl };
      try {
        await addPost(post);
        clearPost();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  };
  const handleDiscard = (): void => clearPost();

  return (
    <Container>
      <Thumbnail />
      <NameInput
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <MessageInput
        placeholder="Mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <FooterContainer>
        <DiscardButton
          onClick={(event) => {
            event.preventDefault();
            handleDiscard();
          }}
        >
          Descartar
        </DiscardButton>
        <PublishButton
          onClick={(event) => {
            event.preventDefault();
            handlePublish();
          }}
          isActive={isFormValid}
        >
          {isLoading ? <Spinner /> : 'Publicar'}
        </PublishButton>
      </FooterContainer>
    </Container>
  );
};

export default AddPostForm;
