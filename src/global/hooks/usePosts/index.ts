import { useContext } from 'react';

import { PostsContext } from '@/global/contexts/PostsContext';

export const usePosts = () => {
  return useContext(PostsContext);
};
