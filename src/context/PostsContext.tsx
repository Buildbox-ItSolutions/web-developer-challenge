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
  updatePostsOnLocalFeed: (postsList: PostType[]) => void;
};

const defaultValues = {
  posts: [],
  setPosts: () => {},
  updatePostsOnLocalFeed: () => {},
};

export const PostsContext = createContext<PostTypeContext>(defaultValues);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>(defaultValues.posts);

  const updatePostsOnLocalFeed = (postsList: PostType[]) =>
    localStorage.setItem('posts-buildbox-feed', JSON.stringify(postsList));

  return (
    <PostsContext.Provider value={{ posts, setPosts, updatePostsOnLocalFeed }}>
      {children}
    </PostsContext.Provider>
  );
};
