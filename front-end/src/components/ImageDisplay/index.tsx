import React from "react";

import { ImageDisplayProps } from "../../utils/interfaces";
import { Image } from "./styles";


function ImageDisplay(props: ImageDisplayProps) {
  const { hasImage = true, src } = props;

  return <Image hasImage={hasImage} src={src} />;
}

export default ImageDisplay;
