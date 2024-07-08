import * as S from "./styles";
import { PostType } from "../../types/post";
import { LuXCircle } from "react-icons/lu";

export const Post = (props: { post: PostType; onClickDelete: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <S.Wrapper>
      <S.Image src={props.post.imageFile ? URL.createObjectURL(props.post.imageFile) : ""} />
      {/* Text Section */}
      <S.TextSection>
        <S.Message>{props.post.message}</S.Message>
        {/* Author Section */}
        <S.AuthorSection>
          <S.AuthorLabel>Enviado por</S.AuthorLabel>
          <S.Author>{props.post.author}</S.Author>
        </S.AuthorSection>
      </S.TextSection>

      <S.CloseButton onClick={props.onClickDelete} aria-label="Deletar post">
        <LuXCircle size="1.25rem" />
      </S.CloseButton>
    </S.Wrapper>
  );
};
