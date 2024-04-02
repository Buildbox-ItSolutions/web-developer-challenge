import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { notification } from "../../service/Notification";
import { postStore } from "../../store/Posts";
import { iPostCreate, postCreateSchema } from "./schemas";

export const formHook = () => {
  const { setPosts, posts } = postStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iPostCreate>({
    resolver: zodResolver(postCreateSchema),
    mode: "onChange",
  });
  const submitPost = (data: iPostCreate) => {
    setPosts([data, ...posts]);
    notification({ message: "Post adicionado com sucesso", type: "success" });
    reset();
  };
  return {
    errors,
    handleSubmit,
    submitPost,
    reset,
    register,
  };
};
