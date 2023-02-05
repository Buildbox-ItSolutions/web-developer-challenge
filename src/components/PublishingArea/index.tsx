import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { useMessage } from '../../hooks/useMessage';
import { Avatar } from '../Avatar';
import { ButtonsContainer, FormContainer } from './styles';

export function PublishingArea() {
  const [authorName, setAuthorName] = useState('');
  const [authorAvatarUrlLocal, setAuthorAvatarUrlLocal] = useState('');
  const [authorAvatarFile, setAuthorAvatarFile] = useState<File>();
  const [newMessageContent, setNewMessageContent] = useState('');

  const { postMessage } = useMessage();

  const isFormInvalid = !newMessageContent.trim().length || !authorName.trim().length || !authorAvatarFile;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    if (authorAvatarFile) {
      const message = {
        author: authorName,
        authorAvatar: authorAvatarFile,
        content: newMessageContent
      }

      toast.promise(
        postMessage(message),
        {
          pending: "Aguarde! Estamos publicando sua mensagem.",
          success: "Mensagem publicada com sucesso."
        }
      );

      setAuthorName('');
      setAuthorAvatarUrlLocal('');
      setAuthorAvatarFile(undefined);
      setNewMessageContent('');
    }
  }

  function handleAuthorNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setAuthorName(event?.target.value);
  }

  function handleAuthorNameInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleAuthorAvatarChange(avatarUrlLocal: string, avatarData: File) {
    setAuthorAvatarUrlLocal(avatarUrlLocal);
    setAuthorAvatarFile(avatarData);
  }

  function handleRemoveAvatar() {
    setAuthorAvatarUrlLocal('');
    setAuthorAvatarFile(undefined);
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewMessageContent(event?.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleResetForm() {
    setAuthorName('');
    setAuthorAvatarUrlLocal('');
    setAuthorAvatarFile(undefined);
    setNewMessageContent('');
  }

  return (
    <FormContainer onSubmit={handleCreateNewComment}>
      <Avatar
        authorAvatar={authorAvatarUrlLocal}
        onChangeAvatar={handleAuthorAvatarChange}
        onRemoveAvatar={handleRemoveAvatar}
      />

      <input
        name="author"
        placeholder="Digite seu nome"
        value={authorName}
        onChange={handleAuthorNameInputChange}
        onInvalid={handleAuthorNameInputInvalid}
        required
      />

      <textarea
        name="message"
        placeholder="Mensagem"
        value={newMessageContent}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <ButtonsContainer>
        <button type="reset" onClick={handleResetForm}>Descartar</button>
        <button type="submit" disabled={isFormInvalid}>Publicar</button>
      </ButtonsContainer>
    </FormContainer>

  )
}