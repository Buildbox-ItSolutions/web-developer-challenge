import { useContext } from "react";
import { PostContext } from "../context/PostsContext";

export function usePosts() {
  const context = useContext(PostContext);
  return context;
}
