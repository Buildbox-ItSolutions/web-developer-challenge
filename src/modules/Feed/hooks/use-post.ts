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
    unregister,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostType>({
    resolver: zodResolver(postSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        if (event.target?.result) {
          const url = event.target.result.toString();
          setImgUrl(url);
          register("imgUrl", { value: url });
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const onSubmit = (data: PostType) => {
    data.postId = Date.now();
    addPost(data);
    reset();
    setImgUrl("");
  };

  return {
    register,
    unregister,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    handleReset: () => {
      reset();
      setImgUrl("");
    },
    errors,
    imgUrl,
    handleFileChange,
    setImgUrl,
  };
};
