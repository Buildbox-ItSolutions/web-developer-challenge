import { ElementPostedType } from "../../../@types/ui/homeUiTypes";
import { Container } from "../../partials/generic/container";
import {
  ImageContainer,
  LayoutPosted,
  LayoutPostedBody,
} from "../../partials/home/HomeLayout";
import { TextTheme } from "../../styles/themes";

export const ElementPosted = ({
  message,
  assigned,
  srcImage,
  srcSetImage,
  srcDelete,
  srcSetDelete,
  choose,
  delPost,
}: ElementPostedType) => {
  return (
    <LayoutPosted>
      <Container width="100%" height="100%" hAlign="center" >
        <ImageContainer
         margin="56px auto auto 24px "
         id="PulishedImage"
          width="88px"
          height="88px"
          radius="36px"
          cursor="default"
          src={srcImage}
          srcSet={srcSetImage}
          choosed={choose}
          fit={choose ? "scale-down" : "cover"}
        />
      </Container>
      <LayoutPostedBody>
        <Container
        id="deleteImageContainer"
          width="100%"
          height="100%"
          vAlign="flex-end"
          padding="12px 12px 0 0"
        >
          <ImageContainer 
            cursor="pointer"
            width="20px"
            height="20px"
            radius="36px"
            src={srcDelete}
            srcSet={srcSetDelete}
            onClick={delPost}
          />
        </Container>
        <Container
          width="100%"
          height="max-content"
          padding="0 24px 0 0"
          font={TextTheme.MessagePosted}
        >
          {message}
        </Container>
        <Container width="100%" height="100%" padding="16px 0 0 0">
          <Container
            width="100%"
            height="30px"
            font={TextTheme.MessageAsignedTitle}
          >
            Enviado por <br />
          </Container>
          <Container width="100%" height="100%" font={TextTheme.MessageAsigned} >
            {assigned}
          </Container>
        </Container>
      </LayoutPostedBody>
    </LayoutPosted>
  );
};
