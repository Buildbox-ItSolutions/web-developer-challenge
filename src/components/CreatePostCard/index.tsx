import React, { useRef, useState } from "react";

import {
  AppButon,
  AppButtonUnderline,
  AppInput,
  AppTextArea,
} from "../../globalStyle";
import {
  AppCard,
  AppCardButtonContainer,
  AppCardContainer,
  AppCardImageContainer,
  RoundImage,
} from "./styles";

import Image from "../../assets/image.png";
import { PostI } from "../../store/modules/types/Post";
import { useDispatch } from "react-redux";
import { storePost } from "../../store/modules/posts/actions";

const CreatePostCard = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState<PostI>({
    author: "",
    image: Image,
    message: "",
  });
  const FileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = () => {
    FileInputRef.current?.click();
  };

  const onPictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage: File | null = e.target?.files ? e.target?.files[0] : null;
    // setPost({ ...post, image: newImage });
    displayUploadedPicture(newImage);
  };

  const displayUploadedPicture = (image: File | null) => {
    if (FileReader && image) {
      const fr = new FileReader();
      fr.onload = () => {
        (document.getElementById(
          "upload-preview"
        ) as HTMLImageElement).src = fr.result as string;
        setPost({ ...post, image: fr.result });
      };
      fr.readAsDataURL(image);
    }
    // Not supported
    else {
      //Fallback upload
    }
  };

  const clearForm = (
    e: React.ChangeEvent<HTMLFormElement> | any | undefined = undefined
  ) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setPost({
      author: "",
      image: Image,
      message: "",
    });
  };

  const submitPost = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.author !== "" && post.message !== "" && post.image !== Image) {
      dispatch(storePost(post as PostI));
    }
    clearForm();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPost({ ...post, [name]: value });
  };

  return (
    <AppCard>
      <form action="" onSubmit={submitPost}>
        <AppCardImageContainer>
          <RoundImage onClick={handleImageChange}>
            <img src={post?.image as string} alt="Upload" id="upload-preview" />
          </RoundImage>
          <input
            style={{ display: "none" }}
            ref={FileInputRef}
            type="file"
            name="fileInput"
            accept="image/*"
            onChange={onPictureUpload}
          />
        </AppCardImageContainer>
        <AppCardContainer>
          <AppInput
            onChange={handleInputChange}
            placeholder="Digite seu nome"
            type="text"
            name="author"
            value={post?.author}
          />
          <AppTextArea
            onChange={handleInputChange}
            placeholder="Mensagem"
            cols={60}
            rows={8}
            wrap="hard"
            name="message"
            value={post?.message}
          ></AppTextArea>
        </AppCardContainer>

        <AppCardButtonContainer>
          <AppButtonUnderline onClick={clearForm}>Descartar</AppButtonUnderline>
          <AppButon type="submit">Publicar</AppButon>
        </AppCardButtonContainer>
      </form>
    </AppCard>
  );
};

export default CreatePostCard;
