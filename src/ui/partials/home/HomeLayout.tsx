import styled from "styled-components";
import { ColorTheme, TextTheme } from "../../../ui/styles/themes";
import { ButtonPublish, ElementType} from "../../../@types/ui/homeUiTypes";

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
  margin: ${(props) => (props.margin ? props.margin : "none")};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.choosed ? `1px solid ${ColorTheme.HomeLogoBorder}` : "none"};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  object-fit: ${(props) => (props.fit ? props.fit : "fill")};
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};

  &#PulishedImage{
    @media screen and (max-width: 300px) {
      width:60px;
      height:60px;
      radius:18.33px;
      margin:auto
  }
  }
`;

export const HomeBody = styled.div`
  display: grid;
  grid-template-rows: 393px 73px 1fr;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: ${ColorTheme.HomeBackground};
`;
export const InputBox = styled.div`
  display: flex;
  width: 516px;
  height: 353px;
  margin: 40px 0 0 0;
  justify-content: center;
  background-color: ${ColorTheme.HomeInputBox};
  border: 1px solid ${ColorTheme.HomeInputBorder};

  @media screen and (max-width: 516px) {
    width:90%;
    min-width: 150px;
    display: flex;
    margin-left:5%;
  }
`;
export const InputLayout = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 128px 48px 80px 1fr;
  width: 100%;
  height: 100%;
`;

export const AvatarChooseImage = styled.input.attrs({
  type: "file",
  id: "avatar",
  name: "avatar",
  accept: "image/png, image/jpeg, image/jpg",
})`
  display: none;
`;

export const AvatarContainer = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 16px;
`;

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
  ${TextTheme.InputFontFamilyTrue};

  &:focus,
  input:focus {
    outline: none;
  }

  @media screen and (max-width: 516px) {
    width:90%;
    min-width: 150px;
    display: flex;
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
  ${TextTheme.InputFontFamilyTrue};

  &:focus,
  input:focus {
    outline: none;
  }

  @media screen and (max-width: 516px) {
    width:90%;
    min-width: 150px;
    display: flex;
  }

`;

export const InputPostButton = styled.button<ButtonPublish>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props=>props.choosed?"pointer" : "default"};
  width: 98px;
  height: 41px;
  border-radius: 8px;
  border: 1px solid ${props=>props.choosed?ColorTheme.HomePublishButtonTrue : ColorTheme.HomePublishButtonFalse};
  background-color: ${props=>props.choosed?ColorTheme.HomePublishButtonTrue : ColorTheme.HomePublishButtonFalse};
  ${props=>props.choosed?TextTheme.InputFontFamilyTrue : TextTheme.InputFontFamilyFalse};

`;

export const ClearOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 12px 24px 12px 0;
  width: 60px;
  height: 17px;
  background-color: transparent;
  text-decoration: underline;
  ${TextTheme.CLearFontFamily}

  @media screen and (max-width: 516px) {
    margin-left: auto;
    margin-right: 0%;
  }
`;

export const BottomBar = styled.div`
  display: grid;
  justify-content: flex-end;
  grid-template-columns: 370px 1fr;
  width: 468px;
  height: 100%;

  @media screen and (max-width: 516px) {
    grid-template-columns: 1fr 0.6fr;
    max-width:90%;
  }

  @media screen and (max-width: 330px) {
    grid-template-columns: 0.8fr 1fr;
    max-width:90%;
  }

  @media screen and (max-width: 250px) {
    grid-template-columns: 0.6fr 1fr;
    max-width:90%;
  }
`;

export const FeedTitleText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  ${TextTheme.FeedTextTitle};
`;

export const PostedBox = styled.div`
  width: 100%;
  height: max-content;

  @media screen and (max-width: 516px) {
    width:90%;
    min-width: 150px;
    display: flex;
    margin-left:5%;
  }
`;

export const LayoutPosted = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 16px;
  height: max-content;
  background-color: ${ColorTheme.HomeInputBox};
  grid-template-columns: 144px 370px;
  border:1px solid ${ColorTheme.HomeInputBorder};
  @media screen and (max-width: 516px) {
    grid-template-columns: 40% 1fr;
    }

`;

export const LayoutPostedBody = styled.div`
  display: grid;
  grid-template-rows: 56px max-content 85px;
  width: 100%;
  height: 100%;
`;


