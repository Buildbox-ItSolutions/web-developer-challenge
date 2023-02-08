import Image from "next/image";
import { XCircle } from "phosphor-react";

import { PostContainer } from "./styles";

import { usePostStore } from "@/store/posts";

interface Props {
  id: string;
  name: string;
  message: string;
  photo: string;
}

export function Post({ id, name, message, photo }: Props) {
  const deletePost = usePostStore((state) => state.deletePost);

  return (
    <PostContainer>
      <div className="imageContainer">
        <Image src={photo} alt="Photo" fill quality={100} priority />
      </div>
      <div className="informationContainer">
        <div className="informationMessage">
          <p>{message}</p>
        </div>

        <div className="informationName">
          <strong>Enviado por</strong>
          <span>{name}</span>
        </div>
      </div>

      <button className="buttonRemove" onClick={() => deletePost(id)}>
        <XCircle />
      </button>
    </PostContainer>
  );
}
