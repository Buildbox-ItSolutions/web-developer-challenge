import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeOutUp } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeOutUpAnimation = keyframes`${fadeOutUp}`;


export const PostContainer = styled.div`
    width: 516px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`
export const PostContainerIn = styled(PostContainer)`
  animation: 1s ${fadeInDownAnimation};
`;

export const PostContainerOut = styled(PostContainer)`
  animation: 1s ${fadeOutUpAnimation};
`;

export const PostImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: 1px solid grey;
  overflow: hidden;
  cursor: pointer;
`
export const PostImgNoBorder = styled(PostImgContainer)`
  border: none;
` 

export const PostImg = styled.img`
  object-fit: contain;
  max-width: 88px;
  max-height: 88px;
`

export const Title = styled.span`
  width: 516px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #7a7a7a;
`