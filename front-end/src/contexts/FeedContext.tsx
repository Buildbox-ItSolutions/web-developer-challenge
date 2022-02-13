import { createContext, useState } from "react";
import { FeedContextProps, FeedContextType } from "./types";

const initial = {
  feed: [{
    _id: "",
    author: "",
    message: "",
    image: "no-img.png",
  }],
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
