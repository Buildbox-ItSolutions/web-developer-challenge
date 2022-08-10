import { IPostAdd } from "../../../../infra/entities/post";

import PostImage from "../post-image";

import * as S from "./styles";
import { DisabledButton, PrimaryButton } from "../../core/buttons/button";
import { TrashIconButton } from "../../core/buttons/icons";
import { CustomGrid } from "../../core/grids/custom";
import { InputText } from "../../core/inputs/input-text";
import { InputTextArea } from "../../core/inputs/input-textarea";

type Props = {
  handleOnChangeImage?: (e: any) => void;
  handleOnRemoveImage?: () => void;
  handleOnDiscard?: () => void;
  handleOnPublish?: () => void;
  imagePreview?: string;
  post: IPostAdd;
  setPost: React.Dispatch<React.SetStateAction<IPostAdd>>;
  isValidPost?: boolean;
};

export function PostAdd({
  handleOnChangeImage,
  handleOnRemoveImage,
  handleOnDiscard,
  handleOnPublish,
  imagePreview,
  post,
  setPost,
  isValidPost,
}: Props) {
  return (
    <CustomGrid>
      <S.GroupActions>
        <label htmlFor="postImage">
          <PostImage image={imagePreview} />

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
            onClick={handleOnRemoveImage}
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
