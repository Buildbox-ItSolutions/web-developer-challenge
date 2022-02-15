import { createContext, ReactNode, useState } from 'react';
import Post from '../types/Post';


type PostTypeContext = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  removePost: (post: Post) => void;
};

const defaultValues = {
  posts: [],
  setPosts: () => {},
  removePost: () => {}
};
export const PostsContext = createContext<PostTypeContext>(defaultValues);


export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(defaultValues.posts);
  
  const removePost = (postRemove: Post) => {
    setPosts(posts.filter((post) => post.id !== postRemove.id));
  };
  
  return (
    <PostsContext.Provider value={{ posts, setPosts, removePost }}>
      {children}
    </PostsContext.Provider>
  );
};