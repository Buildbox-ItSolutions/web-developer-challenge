import type { Post } from "@prisma/client";
import axios from "axios";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import toBase64 from "../utils/toBase64";

interface PostsContextData {
  Posts: Post[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addNewPost: (name?: string, message?: string, photo?: File) => Promise<void>;
  removePost: (id: number) => Promise<void>;
  getPostsFromDB: () => Promise<void>;
}

interface PostsContextProvider {
  children: ReactNode;
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

export function PostsProvider({ children }: PostsContextProvider) {
  console.log("context");
  const [Posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  async function getPostsFromDB() {
    setLoading(true);
    await axios
      .get("/api/posts/getPosts")
      .then(({ data }) => {
        setPosts(data as Post[]);
      })
      .finally(() => setLoading(false))
      .catch((error) => console.log("Error on getting posts from DB", error));
  }

  useEffect(() => {
    getPostsFromDB().catch((error) => console.log(error));
  }, []);

  async function addNewPost(name?: string, message?: string, photo?: File) {
    if (!name || !message || !photo) return;

    setLoading(true);
    await axios
      .post("/api/posts/addPost", {
        name,
        message,
        photo: await toBase64(photo),
      })
      .then(() => {
        getPostsFromDB().catch((error) => console.log(error));
      })
      .catch((error) => console.log("Error on adding post", error))
      .finally(() => {
        setLoading(false);
      });
  }

  async function removePost(id: number) {
    setLoading(true);
    await axios
      .post("/api/posts/deletePost", { id })
      .then(() => {
        getPostsFromDB().catch((error) => console.log(error));
      })
      .catch((error) => console.log("Error on deleting post", error))
      .finally(() => setLoading(false));
  }

  return (
    <PostsContext.Provider
      value={{
        Posts,
        loading,
        setLoading,
        getPostsFromDB,
        addNewPost,
        removePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
