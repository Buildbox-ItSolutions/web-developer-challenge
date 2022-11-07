import styled, { keyframes } from "styled-components";

const leaveAnimation = () => keyframes`
  from {max-height: 230px, opacity: 1; height: 230px; margin-bottom:13px}
  to {opacity: 0; height: 0; display:none; margin-bottom:0}
`;

const entranceAnimation = () => keyframes`
  from {max-height: 0px; opacity: 0; height: 0; margin-bottom:0}
  to { opacity: 1; height: 230px; margin-bottom:13px}
`;

export const PostContainer = styled.section`
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  overflow: hidden;
  animation-name: ${(props: { expanded: boolean }) =>
    props.expanded ? entranceAnimation() : leaveAnimation()};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`;
