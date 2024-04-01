import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '../../constants/queryKeys';
import { postService } from '../../services/posts';
import { PostCard } from '../PostCard';

import * as S from './styles';

export function PostsList() {
  const {
    data: posts = [],
    // isLoading: isLoadingPosts,
    // error: errorOnFetchPosts,
  } = useQuery({
    queryKey: QueryKeys.posts(),
    queryFn: () => postService.getPosts({ limit: 6, page: 1 }),
  });

  return (
    <S.UlStyled>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </S.UlStyled>
  );
}
