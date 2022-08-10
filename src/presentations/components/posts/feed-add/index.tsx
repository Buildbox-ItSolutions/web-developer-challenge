import { useContext, useEffect, useMemo, useState } from "react";
import { IPostAdd } from "../../../../infra/entities/post";
import { convertFileToBase64 } from "../../../../utils/base64";

import ImagePost from "../image";

import * as S from "./styles";
import { PostContext } from "../../../contexts/post";
import { DisabledButton, PrimaryButton } from "../../core/buttons/button";
import { TrashIconButton } from "../../core/buttons/icons";
import { CustomGrid } from "../../core/grids/custom";
import { InputText } from "../../core/inputs/input-text";
import { InputTextArea } from "../../core/inputs/input-textarea";

const initialPost: IPostAdd = {
  image: "",
  message: "",
  name: "",
};

export function FeedAddPost() {
  const postContext = useContext(PostContext);

  const [post, setPost] = useState<IPostAdd>(initialPost);
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

  const addPublish = async (post: IPostAdd) => {
    try {
      await postContext?.addPost(post);
      handleOnDiscard();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const isValidPost = useMemo(() => !!post.message && !!post.name, [post]);

  return (
    <CustomGrid>
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
          <TrashIconButton
            label="remover imagem"
            onClick={onClickRemoveImage}
          />
        )}
      </S.GroupActions>

      <InputText
        placeholder="Digite seu nome"
        value={post.name}
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, name: currentTarget.value }));
        }}
      />

      <InputTextArea
        placeholder="Digite sua mensagem"
        onChange={({ currentTarget }) => {
          setPost((prev) => ({ ...prev, message: currentTarget.value }));
        }}
        value={post.message}
      />

      <S.GroupButtons>
        <DisabledButton onClick={handleOnDiscard}>Descartar</DisabledButton>
        <PrimaryButton onClick={handleOnPublish} disabled={!isValidPost}>
          Publicar
        </PrimaryButton>
      </S.GroupButtons>
    </CustomGrid>
  );
}
