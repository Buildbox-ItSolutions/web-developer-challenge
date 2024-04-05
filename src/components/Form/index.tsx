import { Image, TrashSimple } from "@phosphor-icons/react";
import { ButtonContainer, FormContainer } from "./style";
import React, { FormEvent, useRef, useState } from "react";

interface FormProps {
  onPostAdd: (name: string, comment: string, image: File | null) => void;
}

export function Form( { onPostAdd }:FormProps ) {
  const [newNamePost, setNewNamePost] = useState('')
  const [newCommentPost, setNewCommentPost] = useState('')
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const isNewPostEmpty = newNamePost.length === 0 || newCommentPost.length === 0;

  function handleCleanFormData() {
    setNewNamePost('');
    setNewCommentPost('');
    setSelectedImage(null);
    setImageUrl(null);
    resetInputFile();
  }

  function handleImageChange( event: React.ChangeEvent<HTMLInputElement>) { 
    const files = event.target.files 
    if (files && files.length > 0) {
      const selectedFile = files[0]
      setSelectedImage(selectedFile)
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageUrl(imageUrl)
    } 
  } 

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault()

    onPostAdd(newNamePost, newCommentPost , selectedImage); 

    handleCleanFormData()
  }

  function handleDeletePhoto() {
    setSelectedImage(null)
    setImageUrl(null)
    resetInputFile()
  }

  function resetInputFile() {
    if (inputFileRef.current) {
      inputFileRef.current.value = ''
    }
  }

  function handleSelectPhoto() {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  return (
    <FormContainer onSubmit={handleCreateNewPost}>
      <div className="photo-container">
        <div className="img-post-button" onClick={handleSelectPhoto}>
          <label htmlFor="imageUpload">
            <Image size={30} />
          </label>
          <input
            ref={inputFileRef}
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {imageUrl && (
            <img className="img-url" src={imageUrl} alt="Imagem selecionada" />
          )}
        </div>
        {imageUrl && (
        <div onClick={handleDeletePhoto} className="delete-photo">
          <TrashSimple size={24} />
        </div>
        )}
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