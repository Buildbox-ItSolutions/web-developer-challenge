import { useState } from "react";
import { AvatarInput } from "../avatar-input";
import { PostFormContainer } from "./styles";

export function PostForm() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);

  function handleAvatarChange(avatarSrc: string | null) {
    setAvatarSrc(avatarSrc);
  }

  return (
    <PostFormContainer>
      <AvatarInput imageSrc={avatarSrc} onImageChange={handleAvatarChange} />
    </PostFormContainer>
  );
}
