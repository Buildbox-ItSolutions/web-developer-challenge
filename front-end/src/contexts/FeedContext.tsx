import { createContext, useState } from "react";
import { FeedContextProps, FeedContextType } from "./types";
import jsonData from "../utils/data/contents.json";
import { ContentCardProps, ContentDataSource } from "../utils/interfaces";

const initial = {
  feed: jsonData.map<ContentCardProps>((content: ContentDataSource) => ({
    author: content.author,
    message: content.message,
    image: content.imageName,
  })),
  setFeed: () => {},
};

const FeedContext = createContext<FeedContextType>(initial);

const FeedContextProvider = ({ children }: FeedContextProps) => {
  const [feed, setFeed] = useState(initial.feed);

  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export { FeedContext, FeedContextProvider };
