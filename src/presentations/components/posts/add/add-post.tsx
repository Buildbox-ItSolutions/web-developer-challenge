import { useEffect, useState } from "react";
import { IPostEntity } from "../../../../infra/entities/post";
import { PostRepository } from "../../../../infra/repositories/post-repository";
import { convertFileToBase64 } from "../../../../utils/base64";
import * as S from "./styles";

const initialPost: IPostEntity = {
  image: "",
  message: "",
  name: "",
};

type Props = {
  repository: PostRepository;
};

export default function AddPost({ repository }: Props) {
  const [post, setPost] = useState<IPostEntity>(initialPost);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleOnChangeImage = async ({ currentTarget }: any) => {
    try {
      const file = currentTarget.files?.[0];
      const image = await convertFileToBase64(file);
      setPost({ ...post, image });
    } catch (error: any) {
      console.log(error?.message);
      setImagePreview(post.image);
    }
  };

  useEffect(() => {
    setImagePreview(post.image);
  }, [post.image]);

  const handleOnDiscard = () => {
    setPost(initialPost);
  };

  const handleOnPublish = () => {
    console.log(post);
    addPublish(post);
  };

  const addPublish = async (post: IPostEntity) => {
    try {
      await repository.add(post);
      handleOnDiscard();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <S.Container>
      <label htmlFor="postImage">
        <S.Image>
          <img src={imagePreview} alt="Add Post" />
        </S.Image>
        <input
          id="postImage"
          accept="image/*"
          style={{ display: "none" }}
          type="file"
          onChange={handleOnChangeImage}
        />
      </label>

      <S.Input
        placeholder="Digite seu nome"
        value={post.name}
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, name: currentTarget.value }));
        }}
      />

      <S.TextArea
        placeholder="Digite sua mensagem"
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, message: currentTarget.value }));
        }}
        value={post.message}
      ></S.TextArea>

      <S.GroupButtons>
        <S.Button onClick={handleOnDiscard}>Descartar</S.Button>
        <S.Button onClick={handleOnPublish}>Publicar</S.Button>
      </S.GroupButtons>
    </S.Container>
  );
}
