"use client";

import { deletePost, getPosts } from "@/api";
import { queryClient } from "@/lib/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IPost } from "../types";

export default function usePostsModel() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const {
    mutateAsync: deletePostFn,
    isPending,
    variables,
  } = useMutation({
    mutationFn: deletePost,
    onSuccess: (_, variables) => {
      const cached: IPost[] | undefined = queryClient.getQueryData(["posts"]);
      const newPosts = cached?.filter((post) => post.id !== variables);
      queryClient.setQueryData(["posts"], newPosts);
    },
  });

  const handleDelete = (id: number) => {
    deletePostFn(id);
  };

  return {
    isLoading,
    isPending,
    variables,
    posts,
    handleDelete,
  };
}
