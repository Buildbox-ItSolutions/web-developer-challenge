import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";

import ImageSvg from "../../assets/Image.svg";
import { IPost } from "../../pages/Dashboard";
import { Container, Image, SelectedImage } from "./styles";

interface IFormPost {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

interface IPostsCreate {
  data: IFormPost;
}

export const FormPost = ({ data }: IPostsCreate) => {
  const [photo, setPhoto] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { posts, setPosts } = data;

  useEffect(() => {
    if (photo && name && message) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [photo, name, message]);

  const handleSelectImage = (event: any) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setPhoto(URL.createObjectURL(event.target.files[0]));
      }
    }
  };

  const handleClearForm = () => {
    setName("");
    setMessage("");
    setPhoto("");
  };

  const handleCreatePost = (event: any) => {
    event.preventDefault();
    if (!photo || !name || !message) {
      return alert(
        "Preencha o formulário corretamente para criar um novo posts"
      );
    }
    const newPost: IPost = {
      photo,
      name,
      message,
      id: v4(),
    };
    setPosts([newPost, ...posts]);
    return handleClearForm();
  };

  return (
    <Container
      isActive={isActive}
      onSubmit={(event) => handleCreatePost(event)}
    >
      <label>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => handleSelectImage(event)}
        />
        {photo !== "" ? (
          <SelectedImage src={photo} />
        ) : (
          <Image src={ImageSvg} />
        )}
      </label>
      <input
        placeholder="Digite seu nome"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <textarea
        placeholder="Mensagem"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <div>
        <span className="discard" onClick={handleClearForm}>
          Descartar
        </span>
        <button className="send">Publicar</button>
      </div>
    </Container>
  );
};
