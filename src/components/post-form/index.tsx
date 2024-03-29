import { useState } from "react";
import { AvatarInput } from "../avatar-input";
import { PostFormContainer } from "./styles";
import { Input } from "../input";
import { Textarea } from "../textarea";

export function PostForm() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);

  function handleAvatarChange(avatarSrc: string | null) {
    setAvatarSrc(avatarSrc);
  }

  return (
    <PostFormContainer>
      <AvatarInput
        imageSrc={avatarSrc}
        onImageChange={handleAvatarChange}
        id="avatar-input"
      />
      <Input name="name" placeholder="Digite seu nome" id="name-input" />
      <Textarea name="mensagem" placeholder="Mensagem" />

      <div className="buttons">
        <button className="cancel-btn">Descartar</button>
        <button className="submit-btn">Publicar</button>
      </div>
    </PostFormContainer>
  );
}
