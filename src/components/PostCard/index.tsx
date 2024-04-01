import { Balancer } from 'react-wrap-balancer';

import { Post } from '../../@types/Post';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import { useDeletePost } from '../../hooks/controllers/useDeletePost';

import * as S from './styles';

export type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const { deletePost, isDeletingPost } = useDeletePost();

  return (
    <S.PostCardContainer>
      <S.ImgStyled
        src={post.imageURL}
        alt={`${post.name} Post`}
        width={64}
        height={64}
      />

      <S.Content>
        <S.DeleteButton
          type="button"
          disabled={isDeletingPost}
          onClick={() => deletePost({ id: post.id })}
        >
          <img src={deleteIcon} alt="Delete" />
        </S.DeleteButton>

        <S.Message>
          <Balancer>{post.message}</Balancer>
        </S.Message>

        <S.Footer>
          <small>Enviado por</small>

          <S.Name>{post.name}</S.Name>
        </S.Footer>
      </S.Content>
    </S.PostCardContainer>
  );
}
