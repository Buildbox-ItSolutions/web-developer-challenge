import PhotoUploadImage from "../../../../assets/images/photo-upload.png";
import PhotoImage from "../../../../assets/images/image.png";

import * as S from "./styles";

type Props = {
  image?: string;
};

export default function ImagePost({ image }: Props) {
  return (
    <>
      {image ? (
        <S.Image>
          <img src={image} alt="Add Post" />
        </S.Image>
      ) : (
        <S.NoImage>
          <img src={PhotoUploadImage} alt="Add Post" />

          <S.NoImageCenter src={PhotoImage} alt="Add Post" />
        </S.NoImage>
      )}
    </>
  );
}
