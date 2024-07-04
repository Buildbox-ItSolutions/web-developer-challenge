import { useFeedStore } from "../../../core/stores/feed";

export const useFeedCardContainer = () => {
  const removeFeed = useFeedStore(store => store.removeFeed);

  return {
    removeFeed,
  };
};
