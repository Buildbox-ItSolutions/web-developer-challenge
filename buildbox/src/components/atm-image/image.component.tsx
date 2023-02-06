import { ImgHTMLAttributes } from "react";
import { ImageStyled } from "./image.style";

interface ImageCardProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const ImageCard: React.FunctionComponent<ImageCardProps> = (props) => {
  return <ImageStyled width={"88px"} height={"88px"} {...props} />;
};
