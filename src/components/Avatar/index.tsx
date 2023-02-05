import { ImageSquare, TrashSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { AvatarContainer, AvatarEmptyImage, AvatarImage, RemoveAvatarImage } from "./styles";

interface Event<T = EventTarget> {
  target: T;
}

interface AvatarProps {
  authorAvatar: string;
  onChangeAvatar?: (avatarUrlLocal: string, avatarData: File) => void;
  onRemoveAvatar?: () => void;
}

export function Avatar({ authorAvatar, onChangeAvatar, onRemoveAvatar }: AvatarProps) {
  const [authorAvatarFile, setAuthorAvatarFile] = useState('');
  const colors = useTheme();

  async function handleChangeAuthorAvatar(event: Event<HTMLInputElement>) {
    if (onChangeAvatar) {
      const target = event.target as HTMLInputElement;
      const files = target.files;

      if (files) {
        try {
          const imageObjectUrl = URL.createObjectURL(files[0]);

          onChangeAvatar(imageObjectUrl, files[0]);
          setAuthorAvatarFile(imageObjectUrl);
        } catch (error) {
          throw error;
        }
      }
    }
  }

  useEffect(() => {
    if (authorAvatar) {
      setAuthorAvatarFile(authorAvatar);
    }
  }, [])

  return (
    <>
      {
        authorAvatar ?
          <AvatarContainer>
            <AvatarImage src={authorAvatarFile} alt="Foto do usuário" key={authorAvatarFile} />
            {
              onRemoveAvatar &&
              <RemoveAvatarImage type="submit" onClick={onRemoveAvatar}>
                <TrashSimple size={24} color={colors["red-300"]} />
              </RemoveAvatarImage>
            }
          </AvatarContainer>
          :
          <>
            <AvatarEmptyImage>
              <input
                name="authorAvatar"
                id="authorAvatarInput"
                type="file"
                onChange={handleChangeAuthorAvatar}
              />
              <ImageSquare size={24} color={colors["gray-300"]} />
            </AvatarEmptyImage>
          </>
      }
    </>
  )
}