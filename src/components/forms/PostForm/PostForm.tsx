import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { pt } from "yup-locale-pt";

yup.setLocale(pt);

import Styled from "../../ui/Styled";
import stores from "../../../stores";
import { useRef, useState } from "react";

import ImageSvg from "../../../assets/image.svg";

import { ButtonsContainer, ImageInput, ImageInputContainer } from "./styles";

interface IPostForm {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  name: string;
  message: string;
}

const schema = yup
  .object({
    image: yup.mixed().required(),
    name: yup.string().min(3).required(),
    message: yup.string().min(3).required(),
  })
  .required();

function PostForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IPostForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      image: "",
      name: "",
      message: "",
    },
  });

  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const addPost = stores.useFeedStore((state) => state.addPost);

  function onSubmit(data: IPostForm) {
    if (imagePreview) {
      addPost(data.name, data.message, imagePreview);
      setImagePreview(null);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Card>
        <ImageInputContainer onClick={() => fileInput.current?.click()}>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                ref={fileInput}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  field.onChange(e);
                  const image = e.target.files?.[0];

                  if (!image) return;
                  setImagePreview(image);
                }}
              />
            )}
          />

          {imagePreview ? (
            <ImageInput src={URL.createObjectURL(imagePreview)} />
          ) : (
            <img src={ImageSvg} alt="image_preview" />
          )}
        </ImageInputContainer>

        <Styled.Input placeholder="Digite seu nome" {...register("name")} />
        {errors.name && (
          <Styled.ErrorMessage>{errors.name.message}</Styled.ErrorMessage>
        )}

        <Styled.TextArea placeholder="Mensagem" {...register("message")} />
        {errors.name && (
          <Styled.ErrorMessage>{errors.message?.message}</Styled.ErrorMessage>
        )}

        <ButtonsContainer>
          <Styled.Button
            $ghost
            type="reset"
            onClick={() => setImagePreview(null)}
          >
            Descartar
          </Styled.Button>
          <Styled.Button type="submit">Publicar</Styled.Button>
        </ButtonsContainer>
      </Styled.Card>
    </form>
  );
}

export default PostForm;
