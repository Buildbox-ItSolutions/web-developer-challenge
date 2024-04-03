import { useState } from "react";
import * as S from "./Image.styled";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  const [load, setLoad] = useState(true);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = ({
    currentTarget,
  }) => {
    if (currentTarget instanceof HTMLElement) {
      currentTarget.style.opacity = "1";
    }
    setLoad(false);
  };

  return (
    <S.ImageWrapper>
      {load && <S.Skeleton></S.Skeleton>}
      <S.ImageEl onLoad={handleLoad} src={src} alt={alt} />
    </S.ImageWrapper>
  );
};

export default Image;
