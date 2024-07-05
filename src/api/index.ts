import { IPostPayload } from "@/app/types";

export const getPosts = async () => {
  const response = await fetch("/api/posts");
  const data = await response.json();
  const { posts } = data;
  return posts;
};

export const createPost = async (post: IPostPayload) => {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (id: number) => {
  const response = await fetch(`/api/posts?id=${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
