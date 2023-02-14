import * as S from "./style";
import placeHolderImg from "../../assets/imgs/image.svg";
import trashImg from "../../assets/imgs/trash.svg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type UserSubmitForm = {
  name: string;
  message: string;
  image: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { isValid, errors },
  } = useForm<UserSubmitForm>({ mode: "all" });

  const [selectedImage, setSelectedImage] = useState("");

  const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.length) {
      return;
    }
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageUrl = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    })[0];

    await trigger(["image"]);

    setSelectedImage(imageUrl);
  };

  const onSubmit = (data: UserSubmitForm) => {
    // TODO redux dispatch para a lista do feed
    resetForm();
    console.log({ ...data, image: selectedImage });
  };

  const resetForm = () => {
    reset({
      name: "",
      message: "",
      image: "",
    });
    resetImage();
  };

  const resetImage = () => {
    setSelectedImage("");
  };

  const handleTrash = async () => {
    resetImage();
    reset({
      image: "",
    });
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.ImgWrapper>
        <S.FileInput
          {...register("image", { required: true })}
          onChange={onSelectFile}
          type="file"
          name="image"
          accept="image/png, image/jpeg, image/webp"
        />
        {!selectedImage ? (
          <img src={placeHolderImg} alt="placeholder img icon" />
        ) : (
          <>
            <S.UploadedImg src={selectedImage} alt="uploaded img" />
            <S.TrashImg
              onClick={handleTrash}
              src={trashImg}
              alt="trashcan icon"
            />
          </>
        )}
        <div className="invalid-feedback">{errors.image?.message}</div>
      </S.ImgWrapper>
      <S.InputWrapper>
        <S.NameInput
          {...register("name", { required: true })}
          name="name"
          placeholder="Digite seu nome"
          type="text"
        />
        <div className="invalid-feedback">{errors.name?.message}</div>
        <S.MessageInput
          {...register("message", { required: true })}
          name="message"
          placeholder="Mensagem"
          draggable={false}
        />
        <div className="invalid-feedback">{errors.message?.message}</div>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.DiscardButton type="button" onClick={resetForm}>
          Descartar
        </S.DiscardButton>
        <S.PublishButton disabled={!isValid} type="submit">
          Publicar
        </S.PublishButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};
