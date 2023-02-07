import Image from "next/image";

import { PostContainer } from "./styles";

interface Props {
  name: string;
  message: string;
  photo: string;
}

export function Post({ name, message, photo }: Props) {
  return (
    <PostContainer>
      <div className="imageContainer">
        <Image src={photo} alt="Photo" fill quality={100} priority />
      </div>
      <div className="informationContainer">
        <p>{message}</p>

        <div className="informationName">
          <strong>Enviado por</strong>
          <span>{name}</span>
        </div>
      </div>
    </PostContainer>
  );
}
