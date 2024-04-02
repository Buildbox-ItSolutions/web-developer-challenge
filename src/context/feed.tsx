"use client";

import { fakerPosts } from "@/lib/faker-data";
import { ChildrenProps } from "@/types/children";
import { Post } from "@/types/post";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FeedContextProps {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}

export const FeedContext = createContext<FeedContextProps>({
  posts: [],
  setPosts: () => [],
});

export function FeedProvider({ children }: ChildrenProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(fakerPosts);
  }, []);

  return (
    <FeedContext.Provider value={{ posts, setPosts }}>
      {children}
    </FeedContext.Provider>
  );
}

export const useFeed = () => useContext(FeedContext);
