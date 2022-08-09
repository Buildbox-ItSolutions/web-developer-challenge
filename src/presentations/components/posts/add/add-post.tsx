import { useEffect, useMemo, useState } from "react";
import { IPostEntity } from "../../../../infra/entities/post";
import { PostRepository } from "../../../../infra/repositories/post-repository";
import { convertFileToBase64 } from "../../../../utils/base64";

import {
  DisabledButton,
  PrimaryButton,
} from "../../core/buttons/custom-button";
import { CustomInput } from "../../core/input/custom-input";
import { CustomTextArea } from "../../core/input/custom-textarea";
import ImagePost from "../image";
import TrashImage from "../../../../assets/images/trash.png";

import * as S from "./styles";
import { TrashButton } from "../../core/buttons/icon-button";

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

  const onClickRemoveImage = () => {
    setPost((prev) => ({ ...prev, image: "" }));
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

  const isValidPost = useMemo(() => !!post.message && !!post.name, [post]);

  return (
    <S.Container>
      <S.GroupActions>
        <label htmlFor="postImage">
          <ImagePost image={imagePreview} />

          <input
            id="postImage"
            accept="image/*"
            style={{ display: "none" }}
            type="file"
            onChange={handleOnChangeImage}
          />
        </label>

        {!!imagePreview && (
          <TrashButton
            src={TrashImage}
            alt="remover imagem"
            onClick={onClickRemoveImage}
          />
        )}
      </S.GroupActions>

      <CustomInput
        placeholder="Digite seu nome"
        value={post.name}
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, name: currentTarget.value }));
        }}
      />

      <CustomTextArea
        placeholder="Digite sua mensagem"
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, message: currentTarget.value }));
        }}
        value={post.message}
      ></CustomTextArea>

      <S.GroupButtons>
        <DisabledButton onClick={handleOnDiscard}>Descartar</DisabledButton>
        <PrimaryButton onClick={handleOnPublish} disabled={!isValidPost}>
          Publicar
        </PrimaryButton>
      </S.GroupButtons>
    </S.Container>
  );
}
