// custom hook para fetch dos dados da api gerada pelo miragejs
import { useQuery } from "react-query";

import { api } from "../api";

export function useFeed() {
  return useQuery(
    "feeds",
    async () => {
      const { data } = await api.get("feeds");

      const feeds = data.feeds.map((feed: any) => {
        return {
          id: feed.id,
          name: feed.name,
          comment: feed.comment,
          image: feed.image,
        };
      });

      return feeds;
    },
    {
      // refetchInterval: 1000 * 2, // 2s
      refetchOnMount: true,
    }
  );
}
