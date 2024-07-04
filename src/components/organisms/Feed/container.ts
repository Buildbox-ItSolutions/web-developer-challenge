import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useFeedStore } from "../../../core/stores/feed";

export const useFeedContainer = () => {
  const feeds = useFeedStore(store => store.feeds);
  const [animationRef] = useAutoAnimate();

  return {
    feeds,
    animationRef,
  };
};
