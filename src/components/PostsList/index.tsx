import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { QueryKeys } from '../../constants/queryKeys';
import { postService } from '../../services/posts';
import { PostCard } from '../PostCard';
import { PostCardSkeleton } from '../PostCard/skeleton';

import * as S from './styles';

export function PostsList() {
  const { ref, inView } = useInView();

  const {
    data: postsPagination,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingPosts,
  } = useInfiniteQuery({
    queryKey: QueryKeys.posts(),
    queryFn: ({ pageParam }) =>
      postService.getPosts({ limit: 6, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const posts = postsPagination?.pages.flat() || [];
  const isEmptyList =
    !isLoadingPosts && !isFetchingNextPage && posts.length === 0;

  if (isLoadingPosts) {
    return (
      <S.UlStyled>
        <li>
          <PostCardSkeleton />
        </li>
        <li>
          <PostCardSkeleton />
        </li>
      </S.UlStyled>
    );
  }

  return (
    <S.UlStyled>
      {isEmptyList && (
        <S.EmptyPostsListFeedback>
          Não há nenhum post cadastrado no momento.
        </S.EmptyPostsListFeedback>
      )}

      {posts.map((post, index) => {
        const isLast = index === posts.length - 1;

        return (
          <li key={post.id} ref={isLast ? ref : undefined}>
            <PostCard post={post} />
          </li>
        );
      })}

      {isFetchingNextPage && (
        <>
          <li>
            <PostCardSkeleton />
          </li>
          <li>
            <PostCardSkeleton />
          </li>
        </>
      )}
    </S.UlStyled>
  );
}
