import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FeedContextData } from '../Interfaces/Feed';
import { Post } from '../Interfaces/Post';
import { deletePost, getPosts, savePost } from '../services/post';

const FeedContext = createContext<FeedContextData>({} as FeedContextData);

export type FeedProps = {
  children: ReactNode;
};

export const FeedProvider = ({ children }: FeedProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const addPost = async (post: Post) => {
    try {
      const newPost = await savePost(post);
      setPosts([newPost, ...(posts || [])]);
    } catch (error) {
      setPosts([]);
    }
  };

  const removePost = async (_id: string) => {
    try {
      await deletePost(_id);
      if (posts) {
        const filteredPosts = posts.filter((post) => post._id !== _id);
        setPosts(filteredPosts);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {}
    };

    fetchFeed();
  }, []);

  return (
    <FeedContext.Provider
      value={{
        posts,
        addPost,
        removePost,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);

export default FeedContext;
