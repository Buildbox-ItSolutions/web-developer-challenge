import { createContext, ReactNode, useState } from 'react';

export type PostType = {
  image: string;
  author: string;
  text: string;
  datePosted: string;
};

type PostTypeContext = {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

const defaultValues = {
  posts: [],
  setPosts: () => {},
};

export const PostsContext = createContext<PostTypeContext>(defaultValues);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>(defaultValues.posts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
