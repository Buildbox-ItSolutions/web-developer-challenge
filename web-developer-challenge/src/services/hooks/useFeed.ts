import { useQuery, useQueryClient, useMutation } from "react-query";

import { api } from "../api";

export function useFeed() {
  return useQuery("userFeeds", async () => {
    const { data } = await api.get("feeds");

    return data;
  });
}
