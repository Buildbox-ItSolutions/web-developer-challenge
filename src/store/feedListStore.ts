import { create } from "zustand";
import { TFeedItem } from "../lib/types";
import { feedItemsMocked } from "../lib/mocks";

type Store = {
  feedItems: TFeedItem[];
  isLoading: boolean;
  removeFeedItem: (id: number) => void;
  addItemToList: (imgUrl: string, name: string, description: string) => void;
};

export const useFeedItemsStore = create<Store>((set, get) => ({
  feedItems: [...feedItemsMocked],
  isLoading: false,
  removeFeedItem: (id: number) => {
    const state = get();

    const filteredFeedItems = state.feedItems.filter(
      (feedItem) => feedItem.id !== id
    );

    set(() => ({
      feedItems: filteredFeedItems,
    }));
  },
  addItemToList: (imgUrl: string, name: string, description: string) => {
    const newItem: TFeedItem = {
      id: new Date().getTime(),
      imgUrl,
      name,
      description,
    };

    set((state) => ({
      feedItems: [newItem, ...state.feedItems],
    }));
  },
}));
