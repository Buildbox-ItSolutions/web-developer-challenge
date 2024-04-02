import { createContext, useContext, useState } from "react";
import { DataPostsType, PostProps } from "../types";

const PostsContext = createContext<DataPostsType>({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

const usePostsbase = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const addPost = (newPost: PostProps) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id: number) => {
    const updatePosts = posts.filter(post => {
      return post.postId != id;
    });
    setPosts(updatePosts);
  };

  return {
    posts,
    addPost,
    deletePost,
  };
};

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const value = usePostsbase();
  return <PostsContext.Provider value={value}>{children} </PostsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
