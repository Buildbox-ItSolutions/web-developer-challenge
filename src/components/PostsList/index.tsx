import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetPosts } from '../../hooks/controllers/useGetPosts';
import { PostCard } from '../PostCard';
import { PostCardSkeleton } from '../PostCard/skeleton';

import * as S from './styles';

const itemAnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const defaultItemAnimationProps = {
  variants: itemAnimationVariant,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  layout: true,
};

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
        <motion.li {...defaultItemAnimationProps}>
          <PostCardSkeleton />
        </motion.li>
        <motion.li {...defaultItemAnimationProps}>
          <PostCardSkeleton />
        </motion.li>
      </S.UlStyled>
    );
  }

  return (
    <S.UlStyled>
      <AnimatePresence>
        {noPosts && (
          <S.EmptyPostsListFeedback>
            Não há nenhum post cadastrado no momento.
          </S.EmptyPostsListFeedback>
        )}

        {posts.map((post, index) => {
          const isLast = index === posts.length - 1;

          return (
            <motion.li
              key={post.id}
              ref={isLast ? ref : undefined}
              {...defaultItemAnimationProps}
            >
              <PostCard post={post} />
            </motion.li>
          );
        })}

        {isFetchingNextPage && (
          <>
            <motion.li>
              <PostCardSkeleton />
            </motion.li>
            <motion.li>
              <PostCardSkeleton />
            </motion.li>
          </>
        )}
      </AnimatePresence>
    </S.UlStyled>
  );
}
