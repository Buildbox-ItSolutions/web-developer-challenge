import styled, { keyframes } from "styled-components";
import { gray_400 } from "../../../../../styles/colors/colors";

const leaveAnimation = () => keyframes`
  from { max-height: 600px; margin-bottom:13px}
  to { max-height: 0px; margin-bottom:0}
`;

const entranceAnimation = () => keyframes`
  from {  max-height: 0px; margin-bottom:0}
  to {  max-height: 600px; margin-bottom:13px}
`;

export const PostContainer = styled.section`
  position: relative;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: ${gray_400};
  overflow: hidden;
  animation-name: ${(props) =>
    props.expanded ? entranceAnimation() : leaveAnimation()};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`;
