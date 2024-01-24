import React from "react";
import { IPost } from "../types/post.types";
import { IPostContext } from "../types/postContext.types";

export const PostContext = React.createContext<IPostContext>(
  {} as IPostContext
);

const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPost] = React.useState<IPost[]>([]);

  const savePost = (post: IPost) => {
    setPost([...posts, post]);
  };

  const deletePost = (id: string) => {
    setPost((postData) => postData.filter((item) => item.id !== id));
  };
  return (
    <PostContext.Provider value={{ posts, savePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostsProvider;
