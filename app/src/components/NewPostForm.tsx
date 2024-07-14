"use client";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 3em;
`;

const ImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  align-self: center;
  text-align: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "blue" : "gray")};
  color: white;
  border: none;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
`;

interface NewPostFormProps {
  onAddPost: (name: string, message: string, photo: string) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onAddPost }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState("");

  const handleAddPost = () => {
    if (!name) {
      alert("É necessário inserir um nome.");
      return;
    }

    if (!message) {
      alert("É necessário inserir uma mensagem.");
      return;
    }

    if (!photo) {
      alert("É necessário inserir uma imagem");
      return;
    }
    if (name && message && photo) {
      onAddPost(name, message, photo);
      setName("");
      setMessage("");
      setPhoto("");
    }
  };

  const handleDiscard = () => {
    setName("");
    setMessage("");
    setPhoto("");
  };

  return (
    <FormContainer>
      <ImagePlaceholder onClick={() => setPhoto(prompt("Enter the image URL") || "")}>
        {photo ? <Img src={photo} alt="Post" /> : "Adicionar imagem"}
      </ImagePlaceholder>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
      />
      <ButtonContainer>
        <Button onClick={handleDiscard}>Descartar</Button>
        <Button $primary onClick={handleAddPost}>
          Publicar
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default NewPostForm;
