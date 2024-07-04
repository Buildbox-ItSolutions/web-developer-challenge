"use client";

import { IPostPayload } from "@/app/types";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const postSchema = Yup.object().shape({
  avatar: Yup.string(),
  name: Yup.string()
    .min(3, "O nome precisa ter no mínimo 3 carácteres")
    .max(50, "Tente utilizar no máximo 50 carácteres")
    .required("Preencha seu nome"),
  message: Yup.string()
    .min(3, "A mensagem precisa ter no mínimo 3 carácteres")
    .max(280, "Tente utilizar no máximo 280 carácteres")
    .required("Email is required"),
});

export const useFormModel = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostPayload>({
    resolver: yupResolver(postSchema),
  });
  console.log("errors");
  console.log(errors);
  return {
    isLoading,
    handleSubmit,
    register,
    onSubmit,
    errors,
  };
};
