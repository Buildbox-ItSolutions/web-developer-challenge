import { PropImage } from "./interface";
import { ImageComp } from "./styles";
import ImageDesconhecido from "../../shared/assets/desconhecido.jpg";

function ImageComponent({ src }: PropImage) {
  return <ImageComp src={src || ImageDesconhecido} alt="logo" />;
}

export default ImageComponent;
