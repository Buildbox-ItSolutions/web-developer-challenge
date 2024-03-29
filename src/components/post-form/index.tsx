import { useEffect, useState } from "react";
import { AvatarInput } from "../avatar-input";
import { PostFormContainer } from "./styles";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@/store";

const postFormSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

type PostFormSchema = z.infer<typeof postFormSchema>;

export function PostForm() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);

  const addPost = useStore((state) => state.addPost);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<PostFormSchema>({
    resolver: zodResolver(postFormSchema),
    mode: "onChange",
  });

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    trigger();
  }, [trigger]);

  function handleAvatarChange(avatarSrc: string | null) {
    setAvatarSrc(avatarSrc);
  }

  function onSubmit(data: PostFormSchema) {
    addPost({
      id: new Date().toISOString(),
      avatarImg: avatarSrc,
      name: data.name,
      message: data.message,
    });
    reset();
    setAvatarSrc(null);
  }

  function handleDiscard() {
    setAvatarSrc(null);
    reset();
  }

  return (
    <PostFormContainer>
      <AvatarInput
        imageSrc={avatarSrc}
        onImageChange={handleAvatarChange}
        id="avatar-input"
      />
      <Input
        placeholder="Digite seu nome"
        id="name-input"
        {...register("name")}
      />
      <Textarea placeholder="Mensagem" {...register("message")} />

      <div className="buttons">
        <button type="button" className="cancel-btn" onClick={handleDiscard}>
          Descartar
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          className="submit-btn"
          disabled={!isValid}
          type="submit"
        >
          Publicar
        </button>
      </div>
    </PostFormContainer>
  );
}
