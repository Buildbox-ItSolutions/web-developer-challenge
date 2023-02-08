import { AvatarType } from "../../../../@types/home/ui/homeUiTypes";
import {
  AvatarChooseImage,
  AvatarContainer,
  ImageContainer,
} from "../partials/HomePartials";

//Módulo usado para a escolha de imagem.
//Module used for image choice.

export const Avatar = ({ src, srcSet, handle, choose }: AvatarType) => {
  return (
    <AvatarContainer>
      <AvatarChooseImage onChange={handle} />
      {choose ? (
        <ImageContainer
          width="88px"
          height="88px"
          radius="88px"
          src={src}
          srcSet={srcSet}
          fit="cover"
          choosed={false}
        />
      ) : (
        <ImageContainer
          width="88px"
          height="88px"
          radius="88px"
          src={src}
          srcSet={srcSet}
          fit="none"
          choosed={true}
        />
      )}
    </AvatarContainer>
  );
};
