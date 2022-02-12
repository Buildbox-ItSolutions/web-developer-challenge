import React from "react";
import { Image } from "./styles";

interface PropsType {
  hasImage?: boolean;
  src: string;
}

function ImageDisplay(props: PropsType) {
  const { hasImage = true, src } = props;

  return <Image hasImage={hasImage} src={src} />;
}

export default ImageDisplay;
