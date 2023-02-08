import { Container } from "../../partials/generic/container";
import { Avatar } from "../modules/AvatarModule";
import {
  BottomBar,
  ClearOption,
  ImageContainer,
  InputBox,
  InputLayout,
  InputName,
  InputPost,
  InputPostButton,
} from "../../partials/home/HomeLayout";
import { inputElementType } from "../../../@types/data/homeDataTypes";

import avatar1x from "../../assets/photo-base.png";
import avatar2x from "../../assets/photo-base@2x.png";
import avatar3x from "../../assets/photo-base@3x.png";
import trash1x from "../../assets/trash.png";
import trash2x from "../../assets/trash@2x.png";
import trash3x from "../../assets/trash@3x.png";

export const InputElement = (element: inputElementType) => {
  const avatarSrcSet: string = `${avatar1x} 1x, ${avatar2x} 2x, ${avatar3x} 3x`;
  const trashSrcSet: string = `${trash1x} 1x, ${trash2x} 2x, ${trash3x} 3x`;

  return (
    <InputBox>
      <InputLayout>
        {element.avatar !== avatar1x ? (
          <>
            <Avatar
              src={element.avatar}
              handle={element.change}
              choose={true}
            />
            <Container
              id="trashImageContainer"
              width="24px"
              height="24px"
              position="absolute"
              left="318px"
              top="56px"
            >
              <ImageContainer
                width="100%"
                height="100%"
                src={trash1x}
                srcSet={trashSrcSet}
                choosed={false}
                onClick={element.trash}
              />
            </Container>
          </>
        ) : (
          <Avatar
            src={avatar1x}
            srcSet={avatarSrcSet}
            handle={element.change}
            choose={false}
          />
        )}
        <Container width="100%" height="100%" hAlign="center" vAlign="center">
          <InputName
            width="468px"
            height="40px"
            radius="8px"
            value={element.name}
            onChange={element.nameChange}
          />
        </Container>
        <Container width="100%" height="100%" hAlign="center" vAlign="center">
          <InputPost
            width="468px"
            height="80px"
            radius="8px"
            value={element.post}
            onChange={element.postChange}
          />
        </Container>
        <Container
          width="100%"
          margin="32px 0 24px 0"
          height="max-content"
          hAlign="center"
          vAlign="center"
        >
          <BottomBar>
            <Container width="100%" height="100%" vAlign="flex-end" hAlign="center">
              <ClearOption onClick={element.discart}>Descartar</ClearOption>
            </Container>
            <Container width="100%" height="100%" vAlign="end" hAlign="center">
              {element.name && element.post && element.avatar !== avatar1x? (
                <InputPostButton onClick={element.addPost} choosed={true}>
                  Publicar
                </InputPostButton>
              ) : (
                <InputPostButton onClick={element.addPost} choosed={false}>
                  Publicar
                </InputPostButton>
              )}
            </Container>
          </BottomBar>
        </Container>
      </InputLayout>
    </InputBox>
  );
};
