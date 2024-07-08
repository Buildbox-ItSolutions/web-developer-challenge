import * as S from "./styles";
import { usePostStore } from "../data/postStore";
import { LuImage, LuTrash2 } from "react-icons/lu";
import { useRef } from "react";
import { postSchema } from "../types/post";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Post } from "../components";

const formDataSchema = postSchema.omit({ id: true });
type FormDataType = z.infer<typeof formDataSchema>;

function App() {
  const { postList, createPost, deletePost } = usePostStore();
  const [animationParent] = useAutoAnimate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formDataSchema),
  });
  const imageFile = watch("imageFile");
  const imageFileInputRef = useRef<HTMLInputElement | null>(null);

  // Draft

  const handleClearImageFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue("imageFile", null);
    if (imageFileInputRef.current) {
      imageFileInputRef.current.value = "";
    }
  };

  const handleClearFormData = () => {
    reset();
    if (imageFileInputRef.current) {
      imageFileInputRef.current.value = "";
    }
  };

  const onSubmit = (data: FormDataType) => {
    console.log("Form Data:", data);
    createPost(data);
    reset();
  };

  // Feed

  const handleDeletePost = (id: string) => {
    deletePost(id);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <h1>buildbox</h1>
        <p>Web Challenge</p>
      </S.Header>

      <S.Content>
        <S.Draft onSubmit={handleSubmit(onSubmit)}>
          <S.TitleDraft>Draft</S.TitleDraft>

          {/* Image Section */}
          <S.ImageSectionDraft>
            <S.LabelImageSectionDraft>
              <Controller
                name="imageFile"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    ref={imageFileInputRef}
                    onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
                  />
                )}
              />

              {imageFile ? (
                <>
                  <label htmlFor="image">
                    <img src={URL.createObjectURL(imageFile)} />
                  </label>

                  <S.DeleteButton onClick={handleClearImageFile} type="button">
                    <LuTrash2 size="1.5rem" />
                  </S.DeleteButton>
                </>
              ) : (
                <label htmlFor="image">
                  <S.ImageFileInput>
                    <LuImage size="2rem" />
                  </S.ImageFileInput>
                </label>
              )}
            </S.LabelImageSectionDraft>
            {errors.imageFile && <S.ErrorMessage>{errors.imageFile.message}</S.ErrorMessage>}
          </S.ImageSectionDraft>

          {/* Fields Section */}
          <S.FieldsSectionDraft>
            <S.Input
              type="text"
              id="author"
              {...register("author", { required: true })}
              // onChange={handleInputChange}
              placeholder="Digite seu nome"
            />
            {errors.author && <S.ErrorMessage>{errors.author.message}</S.ErrorMessage>}

            <S.Textarea
              id="message"
              {...register("message", { required: true })}
              // onChange={handleInputChange}
              placeholder="Mensagem"
            />
            {errors.message && <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>}
          </S.FieldsSectionDraft>

          {/* Button Section */}
          <S.ButtonSectionDraft>
            <S.Button onClick={handleClearFormData} type="button">
              Descartar
            </S.Button>
            <S.Button $primary type="submit" disabled={Object.keys(errors).length > 0}>
              Publicar
            </S.Button>
          </S.ButtonSectionDraft>
        </S.Draft>

        <S.Feed>
          <S.TitleFeed>Feed</S.TitleFeed>
          <S.ListFeed ref={animationParent}>
            {postList.map((post) => (
              <li key={post.id}>
                <Post post={post} onClickDelete={() => handleDeletePost(post.id)} />
              </li>
            ))}
          </S.ListFeed>
        </S.Feed>
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
