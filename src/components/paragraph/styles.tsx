import styled from 'styled-components';
import { colors } from "../../theme";

export const MessageParagraph = styled.p`
  width: 19rem;
  height: 5rem;
  font-size: 1rem;
  text-align: left;
  color: ${colors.colorWord};
  overflow-y: auto;
  word-wrap: break-word;
`;


export const WhoParagraph = styled.p`
  width: 10rem;
  font-size: 0.75rem;
  text-align: left;
  margin:0;
  color: ${colors.colorWord}
`;


export const NameParagraph = styled.p`
  width: 10rem;
  font-size: 0.875rem;
  margin-top:0.3rem;
  text-align: left;
  color: ${colors.colorName}
`;
