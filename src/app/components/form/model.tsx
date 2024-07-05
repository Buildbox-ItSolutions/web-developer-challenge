"use client";

import { IPost, IPostPayload } from "@/app/types";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/api";

const schema = yup.object().shape({
  avatar: yup.string(),
  name: yup
    .string()
    .min(3, "O nome precisa ter no mínimo 3 carácteres")
    .max(50, "Tente utilizar no máximo 50 carácteres")
    .required("Preencha seu nome"),
  message: yup
    .string()
    .min(3, "A mensagem precisa ter no mínimo 3 carácteres")
    .max(280, "Tente utilizar no máximo 280 carácteres")
    .required("Digite a mensagem"),
});

export const useFormModel = () => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IPostPayload>({ resolver: yupResolver(schema) });

  const avatarImage = watch("avatar");

  const { mutateAsync: createPostFn, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: (_, variables) => {
      const cached: IPost[] | undefined = queryClient.getQueryData(["posts"]);
      const newPost = {
        ...variables,
        id: cached ? cached.length + 1 : 1,
      } as IPost;
      queryClient.setQueryData(["posts"], (data: IPost[]) => [
        ...data,
        newPost,
      ]);
      resetForm();
    },
  });

  const onSubmit = async (data: IPostPayload) => {
    try {
      await createPostFn(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    resetAvatar();
    setValue("name", "");
    setValue("message", "");
  };

  const resetAvatar = () => setValue("avatar", "");

  const handleImageUpload = (file: React.ChangeEvent<HTMLInputElement>) => {
    const fileCollected = file.target.files?.[0];
    if (!fileCollected) return "";
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      if (!ctx) return "";
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const base64Image = canvas.toDataURL(fileCollected.type);
      setValue("avatar", base64Image, { shouldValidate: true });
    };

    img.src = URL.createObjectURL(fileCollected);
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    errors,
    isValid,
    handleImageUpload,
    avatarImage,
    resetAvatar,
    resetForm,
    isPending,
  };
};
