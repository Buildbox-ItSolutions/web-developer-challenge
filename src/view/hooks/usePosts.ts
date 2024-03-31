import { useContext } from "react";
import { PostContext } from "../../context/post-context";

export function usePosts() {
    const context = useContext(PostContext);
    if (!context) {
      throw new Error("usePosts must be used within a PostsProvider");
    }
    return context;
  }