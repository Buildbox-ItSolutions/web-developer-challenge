import { useState, useCallback } from 'react';
import { Post } from '~/types/Post';
import storageItems from '~/data/data.json';

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPosts = useCallback(async () => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts(storageItems);
      setIsLoading(false);
    });
  }, []);

  const createPost = useCallback(async (post: Post) => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts((prev) => [...prev, post]);
      setIsLoading(false);
    }, 500);
  }, []);

  const deletePost = useCallback(
    async (id: number) => {
      setIsLoading(true);
      setTimeout(() => {
        const newData = posts.filter((item) => item.id !== id);
        setPosts([...newData]);
        setIsLoading(false);
      }, 500);
    },
    [posts],
  );

  return {
    posts,
    isLoading,
    getAllPosts,
    createPost,
    deletePost,
  };
};
