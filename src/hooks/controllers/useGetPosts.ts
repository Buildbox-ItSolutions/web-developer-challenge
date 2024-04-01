import { useInfiniteQuery } from '@tanstack/react-query';

import { QueryKeys } from '../../constants/queryKeys';
import { postService } from '../../services/posts';

type GetPostsPayload = {
  initialPage?: number;
};

export function useGetPosts(payload?: GetPostsPayload) {
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
    initialPageParam: payload?.initialPage ?? 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.totalPages === allPages.length ? undefined : allPages.length + 1,
  });

  const posts = postsPagination?.pages.flatMap((page) => page.posts) || [];
  const noPosts = !isLoadingPosts && !isFetchingNextPage && posts.length === 0;

  return {
    posts,
    fetchNextPage,
    hasNextPage,
    isLoadingPosts,
    isFetchingNextPage,
    noPosts,
  };
}
