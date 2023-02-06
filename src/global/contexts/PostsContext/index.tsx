import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from 'react';

import { PostService } from '@/global/services';
import { IPost } from '@/global/types/models/post';

import { IContext, IProvider } from './types';

export const PostsContext = createContext({} as IContext);

export const PostsProvider = ({ children }: IProvider) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[] | null>(null);

  const getPosts = useCallback(async () => {
    const response = await PostService.getAllPosts();

    setPosts(response);
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const value = useMemo(
    () => ({
      isLoading,
      posts,
      setIsLoading,
    }),
    [isLoading, posts]
  );
  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};
