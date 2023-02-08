import styled from "styled-components";
import { ColorTheme, TextTheme } from "../../styles/themes";
import { Container } from "../generic/container";

type ElementType = {
  width: string;
  height: string;
  radius?: string;
  fit?: string;
  choosed?: boolean;
  cursor?: string;
};

type AvatarType = {
  src: string;
  srcSet?: string;
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  choose: boolean;
};

type ElementPostedType = {
  choose?:boolean;
  srcImage?: string;
  srcSetImage?: string;
  srcDelete?: string;
  srcSetDelete?: string;
  message?: string;
  delPost?:()=>void;
  assigned?: string;
};

export const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 93px 1fr;
  width: 1366px;
  min-height: 1164px;
  background-color: ${ColorTheme.HomeBackground};
`;

export const HomeTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 93px;
  background-color: ${ColorTheme.HomeTopBarBackground};
`;

export const ImageContainer = styled.img.attrs((props) => ({
  src: props.src,
  srcSet: props.srcSet,
}))<ElementType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.choosed ? `1px solid ${ColorTheme.HomeLogoBorder}` : "none"};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  object-fit: ${(props) => (props.fit ? props.fit : "fill")};
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
`;

export const HomeBody = styled.div`
  display: grid;
  grid-template-rows: 393px 73px 1fr;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: ${ColorTheme.HomeBackground};
`;

export const InputLayout = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 128px 48px 80px 97px;
  width: 100%;
  height: 100%;
`;

const AvatarChooseImage = styled.input.attrs({
  type: "file",
  id: "avatar",
  name: "avatar",
  accept: "image/png, image/jpeg, image/jpg",
})`
  display: none;
`;

const AvatarContainer = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 16px;
`;

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

export const InputName = styled.input.attrs({
  type: "text",
  id: "inputText",
  name: "inputText",
})<ElementType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  padding: 12px 16px 11px 16px;
  background-color: ${ColorTheme.HomeInputBackground};
  border: 1px solid ${ColorTheme.HomeInputBackground};
  ${TextTheme.InputFontFamily};

  &:focus,
  input:focus {
    outline: none;
  }
`;

export const InputPost = styled.textarea<ElementType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  resize: none;
  padding: 12px 16px 12px 16px;
  border: 1px solid ${ColorTheme.HomeInputBackground};
  background-color: ${ColorTheme.HomeInputBackground};
  ${TextTheme.InputFontFamily};

  &:focus,
  input:focus {
    outline: none;
  }
`;

export const InputPostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 98px;
  height: 41px;
  border-radius: 8px;
  border: 1px solid ${ColorTheme.HomePublishButton};
  background-color: ${ColorTheme.HomePublishButton};
  ${TextTheme.InputFontFamily}
`;

export const ClearOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px !important;
  width: 60px;
  height: 17px;
  background-color: transparent;
  text-decoration: underline;
  ${TextTheme.CLearFontFamily}
`;

export const BottomBar = styled.div`
  display: grid;
  justify-content: flex-end;
  grid-template-columns: 370px 98px;
  width: 468px;
  height: 100%;
`;

export const FeedTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  ${TextTheme.FeedTextTitle};
`;

const LayoutPosted = styled.div`
  display: grid;
  width: 516px;
  margin-bottom: 16px;
  height: max-content;
  background-color: ${ColorTheme.HomeInputBox};
  border: 1px solid ${ColorTheme.HomeInputBox};
  grid-template-columns: 144px 372px;
`;

const LayoutPostedBody = styled.div`
  display: grid;
  grid-template-rows: 56px max-content 81px;
  width: 100%;
  height: 100%;
`;

export const ElementPosted = ({
  message,
  assigned,
  srcImage,
  srcSetImage,
  srcDelete,
  srcSetDelete,
  choose,
  delPost
}: ElementPostedType) => {
  return (
    <LayoutPosted>
      <Container
        width="88px"
        height="88px"
        margin="56px 32px 81px 24px"
      >
        <ImageContainer
          width="100%"
          height="100%"
          radius="36px"
          cursor="default"
          src={srcImage}
          srcSet={srcSetImage}
          choosed={choose}
          fit={choose?"scale-down":"cover"}
        />
      </Container>
      <LayoutPostedBody>
        <Container
          width="100%"
          height="1000%"
          vAlign="flex-end"
          padding="12px 12px 0 0"
        >
          <ImageContainer
            width="20px"
            height="20px"
            radius="36px"
            cursor="default"
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
        <Container
          width="100%"
          height="100%"
          padding="16px 0 0 0"
        >
            <Container
          width="100%"
          height="30px"
          font={TextTheme.MessageAsignedTitle}
        >
          Enviado por <br />
          </Container>
          <Container
          width="100%"
          height="100%"
          font={TextTheme.MessageAsigned}
        >
          {assigned}
          </Container>
        </Container>
      </LayoutPostedBody>
    </LayoutPosted>
  );
};
