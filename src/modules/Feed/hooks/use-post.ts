import { useForm } from "react-hook-form";
import { PostType, postSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePosts } from "../../../providers/PostsContext";
import { useState } from "react";

export const useCreatePost = () => {
  const { addPost } = usePosts();
  const [imgUrl, setImgUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostType>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: PostType) => {
    data.postId = Date.now();
    addPost(data);
    reset();
    setImgUrl("");
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    handleReset: () => {
      reset();
      setImgUrl("");
    },
    errors,
    imgUrl,
    setImgUrl,
  };
};
