import { useQuery } from "react-query";
import { createContext } from "vm";
import { api } from "../api";

interface Feed {
  id: number;
  name: string;
  comment: string;
  image: File;
}

export function useFeed() {
  return useQuery("userFeeds", async () => {
    const { data } = await api.get("feeds");

    return data;
  });
}
