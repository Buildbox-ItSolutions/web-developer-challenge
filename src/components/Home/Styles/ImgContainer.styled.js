import styled, { keyframes } from "styled-components";
import { gray_200, gray_400 } from "../../../styles/colors/colors";

const leaveAnimation = () => keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const entranceAnimation = () => keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 36px;
  border: solid 1px ${gray_200};
  
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
    border: solid 1px ${gray_200};
    background-color: ${gray_400};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    outline: none;
    cursor: pointer;
    background-image: url(${(props) => props.filePathCopy});
    animation-name: ${(props) =>
    props.filePath ? entranceAnimation() : leaveAnimation()};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;
