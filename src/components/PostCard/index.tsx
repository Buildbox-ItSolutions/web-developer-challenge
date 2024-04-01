import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Balancer } from 'react-wrap-balancer';
import { toast } from 'sonner';

import { Post } from '../../@types/Post';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import { QueryKeys } from '../../constants/queryKeys';
import { postService } from '../../services/posts';

import * as S from './styles';

export type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const queryClient = useQueryClient();

  const { mutate: deletePostRequest, isPending: isDeletingPost } = useMutation({
    mutationFn: postService.deletePost,
  });

  function deletePost() {
    deletePostRequest(
      {
        id: post.id,
      },
      {
        async onSuccess() {
          await queryClient.invalidateQueries({
            predicate(query) {
              return query.queryKey[0] === QueryKeys.posts()[0];
            },
          });
        },
        onError(error) {
          toast.error(error.message);
        },
      },
    );
  }

  return (
    <S.PostCardContainer>
      <S.ImgStyled src={post.imageURL} alt={`${post.name} Post`} />

      <S.Content>
        <S.DeleteButton
          type="button"
          disabled={isDeletingPost}
          onClick={deletePost}
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
