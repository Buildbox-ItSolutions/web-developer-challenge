import { FC } from "react";
import * as S from "./style";
import deleteImg from "../../assets/imgs/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { usePosts, removePost } from "../../redux/slicePosts";

type FeedItemProps = {
  name: string;
  message: string;
  image: string;
  id: string;
};

export const Feed = () => {
  const posts = useSelector(usePosts);

  return (
    <S.Container>
      <S.FeedText>Feed</S.FeedText>
      <S.FeedItemsList>
        {posts.length ? (
          posts.map((eachItem) => <FeedItem {...eachItem} />)
        ) : (
          <S.NoItemsText>Nenhum item a ser mostrado</S.NoItemsText>
        )}
      </S.FeedItemsList>
    </S.Container>
  );
};

const FeedItem: FC<FeedItemProps> = ({ name, message, image, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removePost({ name, message, image, id }));
  };

  return (
    <S.FeedItemWrapper>
      <S.DeleteIcon src={deleteImg} alt="x icon" onClick={handleDelete} />
      <S.ImageWrapper>
        <S.PostImage alt="uploaded img from user" src={image} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.MessageText>{message}</S.MessageText>
        <S.SentByText>
          Enviado por <br />
        </S.SentByText>
        <S.AuthorText>{name}</S.AuthorText>
      </S.TextWrapper>
    </S.FeedItemWrapper>
  );
};
