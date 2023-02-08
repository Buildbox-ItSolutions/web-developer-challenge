import { AvatarType } from "../../../@types/ui/homeUiTypes";
import { AvatarChooseImage, AvatarContainer, ImageContainer } from "../../partials/home/HomeLayout";

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