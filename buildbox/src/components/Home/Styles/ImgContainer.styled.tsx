import styled, { keyframes } from "styled-components";

const imageAnimation = (
  isEmptyImage: boolean,
  filePath: string,
  emptyImage: string
) => keyframes`
  from {background-image: url(${isEmptyImage ? emptyImage : filePath})}
  to {background-image: url(${isEmptyImage ? filePath : emptyImage})}
`;

export const ImgContainer = styled.div`
  & input {
    box-sizing: border-box;
    padding: 86px 0px 0px 0px;
    overflow: hidden;
    width: 88px;
    height: 88px;
    min-width: 88px;
    max-height: 88px;
    margin: auto;
    margin-top: 0px;
    display: block;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${(props: {
      filePath: string;
      isEmptyImage: boolean;
      emptyImage: string;
    }) => (props.isEmptyImage ? "cover" : "auto")};
    outline: none;
    cursor: pointer;
    animation-name: ${(props: {
      filePath: string;
      isEmptyImage: boolean;
      emptyImage: string;
    }) => imageAnimation(props.isEmptyImage, props.filePath, props.emptyImage)};
    animation-duration: 0.5s;
    animation-fill-mode: forwards
  }
`;
