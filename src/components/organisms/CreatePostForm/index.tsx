import { useForm } from "react-hook-form";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, Textarea, PrimaryButton, TextButton } from "../../atoms";
import { PostCard, PostUploadImageInput } from "../../molecules";
import { Content, Row, Form, ImageRow } from "./styles";
import { Post } from "_types";
import { schema } from "./validations";

interface CreatePostFormProps {
  onSubmit: (data: Post) => any;
}

export const CreatePostForm = ({ onSubmit }: CreatePostFormProps) => {
  const defaultValues = React.useMemo<Post>(
    () => ({
      message: "",
      name: "",
      photo: "",
    }),
    []
  );

  const { register, handleSubmit, setValue, reset, watch, formState } =
    useForm<Post>({
      defaultValues,
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const onValid = (data: Post) => {
    onSubmit(data);
    reset();
  };

  return (
    <PostCard marginTop={0} marginBottom={56} padding={24}>
      <Form onSubmit={handleSubmit(onValid)}>
        <ImageRow>
          <PostUploadImageInput
            onChange={(photo) => {
              setValue("photo", photo, { shouldValidate: true });
            }}
            photo={watch("photo")}
            onRemove={() => setValue("photo", "", { shouldValidate: true })}
          />
        </ImageRow>
        <Content>
          <Input {...register("name")} placeholder="Digite seu nome" />
          <Textarea {...register("message")} placeholder="Mensagem" />
        </Content>
        <Row>
          <TextButton label="Descartar" onClick={() => reset()} type="button" />
          <PrimaryButton label="Publicar" disabled={!formState.isValid} />
        </Row>
      </Form>
    </PostCard>
  );
};
