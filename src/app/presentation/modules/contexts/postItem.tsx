/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostModelx } from "@/app/domain/models";
import React from "react";

type ContextProps = {
  posts: PostModelx[];
  createPost: (posts: PostModelx) => void;
  onRemovePost: (id: string) => void;
  onGetFromToggle: (value: boolean) => void;
  getFromToggle: boolean;
};

const postsContext = React.createContext<ContextProps>({
  createPost: () => {},
  onRemovePost: () => {},
  posts: [],
  onGetFromToggle: () => {},
  getFromToggle: false,
});
export const usePosts = () => {
  const context = React.useContext(postsContext);

  if (!context) throw new Error("usePosts must be used within a PostsProvider");
  return context;
};
const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState<PostModelx[]>([]);
  const [createPosts, setCreatePosts] = React.useState<PostModelx>();
  const [getFromToggle, setGetFromToggle] = React.useState(false);
  const [removePosts, setRemovePosts] = React.useState<PostModelx[]>(posts);

  const createPost = (value: PostModelx) => {
    setPosts([...posts, value]);
  };

  const onRemovePost = (id: string) => {
    const itemRemoved = removePosts.filter((item) => item.id !== id);
    setPosts(itemRemoved);
  };
  const onGetFromToggle = (value: boolean) => {
    setGetFromToggle(value);
  };

  return (
    <postsContext.Provider
      value={{
        posts,
        onRemovePost,
        createPost,
        onGetFromToggle,
        getFromToggle,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
export default PostsProvider;
