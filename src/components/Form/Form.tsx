import * as S from "./style";
import placeHolderImg from "../../assets/imgs/image.svg";
import React, { useState } from "react";

export const Form = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    message: "",
  });

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.length) {
      return;
    }
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageUrl = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    })[0];

    setSelectedImage(imageUrl);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // TODO redux here

    const body = { ...formState, img: selectedImage };
    console.log(body);
  };

  const resetForm = () => {
    setFormState({ name: "", message: "" });
    setSelectedImage('')
  };

  const resetImage = () => {
    setSelectedImage('');
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.ImgWrapper>
        <S.FileInput
          type="file"
          name="image"
          onChange={onSelectFile}
          accept="image/png, image/jpeg, image/webp"
        />
        {!selectedImage ? (
          <img src={placeHolderImg} alt="placeholder img symbol" />
        ) : (
          <S.UploadedImg src={selectedImage} alt="uploaded img" />
        )}
      </S.ImgWrapper>
      <S.InputWrapper>
        <S.NameInput
          name="name"
          placeholder="Digite seu nome"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
        <S.MessageInput
          name="message"
          placeholder="Mensagem"
          value={formState.message}
          onChange={handleChange}
          draggable={false}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <button type="button" onClick={resetForm}>
          Descartar
        </button>
        <button type="submit">Publicar</button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
