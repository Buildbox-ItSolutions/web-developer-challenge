import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { Box } from "../App/styled";

export const Container = styled.div`
  ${Box}
  position: relative;
`;

export const Close = styled(IoMdCloseCircleOutline)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #BA5225;
  font-size: 25px;
  cursor: pointer;
`


export const Contents = styled.span`
  color: #878787;
  word-break: break-word;
`

export const SentBy = styled.span`
  color: #424242;
  font-size: 12px;
`

export const Author = styled.span`
  color: #717171;
  font-size: 14px;
  word-break: break-word; 
`
