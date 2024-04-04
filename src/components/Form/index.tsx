import { Image, TrashSimple } from "@phosphor-icons/react";
import { ButtonContainer, FormContainer } from "./style";
import { FormEvent, useState } from "react";

interface FormProps {
  onPostAdd: (name: string, comment: string) => void;
}

export function Form( { onPostAdd }:FormProps ) {
  const [newNamePost, setNewNamePost] = useState('')
  const [newCommentPost, setNewCommentPost] = useState('')

  const isNewPostEmpty = newNamePost.length === 0 || newCommentPost.length === 0;

  function handleCleanFormData() {
    setNewNamePost('')
    setNewCommentPost('')
  }

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault()

    onPostAdd(newNamePost, newCommentPost);

    setNewNamePost('')
    setNewCommentPost('')
  }

  return (
    <FormContainer onSubmit={handleCreateNewPost}>
      <div className="photo-container">
        <div className="img-post-button">
          <Image size={30} />
        </div>
        <TrashSimple size={24} />
      </div>
      <div className="input-container">
        <div className="label-wrapper">
          <label htmlFor="name">Digite seu nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={newNamePost}
            onChange={(e) => setNewNamePost(e.target.value)}
          />
        </div>
        <div className="label-wrapper">
          <label htmlFor="message">Digite seu nome</label>
          <textarea
            id="message"
            placeholder="Mensagem"
            value={newCommentPost}
            onChange={(e) => setNewCommentPost(e.target.value)}
          />
        </div>
      </div>
      <ButtonContainer>
        <a onClick={handleCleanFormData}>Descartar</a>
        <button type="submit" disabled={isNewPostEmpty}>Publicar</button>
      </ButtonContainer>
      
    </FormContainer>
  )
}