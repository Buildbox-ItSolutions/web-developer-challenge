import { create } from "zustand";
import { IFeedStore } from "./types";

const feedInitialState = {
  feeds: [],
};

export const useFeedStore = create<IFeedStore>(set => ({
  ...feedInitialState,

  createFeed: feed => {
    set(store => {
      const newFeed = store.feeds;
      newFeed.unshift(feed);

      return {
        feeds: [...newFeed],
      };
    });
  },
  removeFeed: feedId => {
    set(store => ({
      feeds: store.feeds.filter(feed => feed.id !== feedId),
    }));
  },
}));
