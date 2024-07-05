import { getPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function usePostsModel() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return {
    isLoading,
    posts,
  };
}
