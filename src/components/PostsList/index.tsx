import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetPosts } from '../../hooks/controllers/useGetPosts';
import { PostCard } from '../PostCard';
import { PostCardSkeleton } from '../PostCard/skeleton';

import * as S from './styles';

export function PostsList() {
  const { ref, inView } = useInView();

  const {
    posts,
    fetchNextPage,
    hasNextPage,
    isLoadingPosts,
    isFetchingNextPage,
    noPosts,
  } = useGetPosts();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
      {noPosts && (
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
