import { ImagePost } from "../../../../components/index";
import * as S from "./styles";
import { PostType } from "../../types";
import { usePosts } from "../../../../providers/PostsContext";

export const CardPost = (props: PostType) => {
  const { author, messagePost, imgUrl, postId } = props;
  const { deletePost } = usePosts();
  const handleDelete = () => {
    if (postId) {
      deletePost(postId);
    }
  };
  return (
    <S.Container>
      <S.ButtonClose onClick={handleDelete}>
        <img src="./delete.svg" alt="" />
      </S.ButtonClose>
      <S.CardPostInner>
        <ImagePost $url={imgUrl} $isDisabled={true} />
        <div style={{ minWidth: "60px" }}>
          <p>{messagePost}</p>
        </div>
        <S.Authorship>
          <span>Enviado por:</span>
          <span>{author}</span>
        </S.Authorship>
      </S.CardPostInner>
    </S.Container>
  );
};
