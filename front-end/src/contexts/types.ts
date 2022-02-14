import { ReactNode } from "react";

import { ContentCardProps } from "../utils/interfaces";

type CraftContextType = {
  author: string;
  setAuthor: (newAuthor: string) => void;
  message: string;
  setMessage: (newMessage: string) => void;
  image: string;
  setImage: (newImage: string) => void;
};

type FeedContextType = {
  feed: ContentCardProps[];
  setFeed: (newContent: ContentCardProps[]) => void;
};

type CraftContextProps = {
  children: ReactNode;
};

type FeedContextProps = {
  children: ReactNode;
};

export type {
  CraftContextType,
  FeedContextType,
  CraftContextProps,
  FeedContextProps,
};
