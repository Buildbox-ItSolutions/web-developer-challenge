import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '../../constants/queryKeys';
import { postService } from '../../services/posts';
import { PostCard } from '../PostCard';
import { PostCardSkeleton } from '../PostCard/skeleton';

import * as S from './styles';

export function PostsList() {
  const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
    queryKey: QueryKeys.posts(),
    queryFn: () => postService.getPosts({ limit: 6, page: 1 }),
  });

  return (
    <S.UlStyled>
      {isLoadingPosts && (
        <>
          <li>
            <PostCardSkeleton />
          </li>
          <li>
            <PostCardSkeleton />
          </li>
        </>
      )}

      {!isLoadingPosts &&
        posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
    </S.UlStyled>
  );
}
