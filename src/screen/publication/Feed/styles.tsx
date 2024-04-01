import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import { Image, Paragraph } from '../../../styles';

export const ContainerGroupFeeds = styled.div`
    width: 516px;
    display: contents;
`;

export const Text = styled.p`
  ${Paragraph}
  width: 516px; 
  margin: 0 0 0.5rem 0; 
  font-size: ${theme.sizes.small};
  font-weight: 500;
  line-height: 1.29;
  color: ${theme.colors.grey100};
`;

export const ContainerPost = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 425px 16px;
  border-radius: 3px;
  border: solid 1px ${theme.colors.grey500};
  background-color: ${theme.colors.grey700};
`;

export const ContainerDeleteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonDelete = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.75rem 0.75rem 0 0;
`;

export const ContainerPhotoMesage = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const ImageProfile = styled.img`
  ${Image}
  margin: 0 2rem 0 1.5rem;
  border-radius: 2.25rem;
`;

export const TextLorem = styled.p`
  ${Paragraph}
  width: 348px; 
  margin: 0 0 1.5rem 0;
`;

export const TextSend = styled.p`
  ${Paragraph}
  margin: 0 0 0.125rem 0; 
  font-size: ${theme.sizes.xsmall};
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.29px;
  color: ${theme.colors.grey200};
`;

export const TextName = styled.p`
  ${Paragraph}
  margin: 0 0 2rem 0; 
  font-size: ${theme.sizes.small};
  font-weight: 500;
  line-height: 1.29;
  color: ${theme.colors.grey100};
`;

