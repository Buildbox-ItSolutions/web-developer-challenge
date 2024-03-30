import { useForm } from "react-hook-form";
import { PostType, postSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

export const usePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostType>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: PostType) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
