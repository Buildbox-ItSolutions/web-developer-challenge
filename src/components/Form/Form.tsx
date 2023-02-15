import * as S from "./style";
import placeHolderImg from "../../assets/imgs/image.svg";
import trashImg from "../../assets/imgs/trash.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPosts } from "../../redux/slicePosts";

type UserSubmitForm = {
  name: string;
  message: string;
  image: string;
  id: string;
};

export const Form = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { isValid },
  } = useForm<UserSubmitForm>();

  const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.length) {
      return;
    }

    // creating an ObjectURL so we can display the img preview. This can be escalated to accept more imgs in the future.
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageUrl = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    })[0];

    // triggering validation for 'image' field
    await trigger(["image"]);

    setSelectedImage(imageUrl);
  };

  const onSubmit = (data: UserSubmitForm) => {
    resetForm();
    // creating a unique ID for the body
    const id = (+new Date()).toString(36);
    const body = { ...data, image: selectedImage, id: id };
    dispatch(addPosts(body));
  };

  const resetImage = () => {
    setSelectedImage("");
  };

  const resetForm = () => {
    reset({
      name: "",
      message: "",
      image: "",
    });
    resetImage();
  };

  const handleTrash = () => {
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
      </S.ImgWrapper>
      <S.InputWrapper>
        <S.NameInput
          {...register("name", { required: true })}
          name="name"
          placeholder="Digite seu nome"
          type="text"
        />
        <S.MessageInput
          {...register("message", { required: true })}
          name="message"
          placeholder="Mensagem"
          draggable={false}
        />
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
