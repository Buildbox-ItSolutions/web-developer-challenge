import React, { useState } from "react";
import { v4 } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";
import noImg from "../../assets/images/image.svg";
import trash from '../../assets/images/trash.svg'
import { usePosts } from "../../hooks/usePosts";
import { fileToBase64 } from "../../utils/convertFile";


export function NewPost() {
  const [image, setImage] = useState<any>();
  const { setPosts } = usePosts();
  const { register, handleSubmit, reset } = useForm<InputsType>();
  const id = v4();

  type InputsType = {
    imagePreview: string;
    author: string;
    msg: string;
  };

  const handleNewPost: SubmitHandler<InputsType> = ({ author, msg }) => {
    const newPost = { id, image, author, msg };

    setPosts((prevPosts) => [...prevPosts, { ...newPost }]);
    removeSelectedImage();
    reset();
  };

  const imageChange = async (e: any) => {
    let file = e.target.files[0];
    const fileTo64 = await fileToBase64(file);

    setImage(fileTo64);
  };

  const removeSelectedImage = () => {
    setImage(undefined);
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(handleNewPost)}>
      <input
        accept="image/*"
        type="file"
        id="image"
        className="inputPhoto"
        {...register("imagePreview", {
          required: true,
        })}
        onChange={imageChange}
      />
      <label htmlFor="image">
        <S.UploadPhoto>
          {!image ? (
            <img className="noImg" src={noImg} alt="No picture icon" />
            ) : (
              <img src={image} className="authorImg" alt='preview picture'/>
              )}
        </S.UploadPhoto>
      </label>
      {image && (
        <button className='removeImage' onClick={removeSelectedImage}>
            <img src={trash} alt='Remove image preview' />
          </button>
        )}
      <S.EnterName
        type="text"
        placeholder="Digite seu nome"
        {...register("author", {
          required: true,
        })}
        required
      />
      <S.EnterMessage
        placeholder="Mensagem"
        {...register("msg", {
          required: true,
        })}
        required
      />
      <S.ButtonsWrapper>
        <S.DiscartButton onClick={removeSelectedImage} type="reset">
          Descartar
        </S.DiscartButton>
        <S.PublishButton type="submit">Publicar</S.PublishButton>
      </S.ButtonsWrapper>
    </S.FormWrapper>
  );
}
