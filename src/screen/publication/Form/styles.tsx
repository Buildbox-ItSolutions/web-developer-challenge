import styled, {css} from 'styled-components';
import {theme} from '../../../styles/theme';
import { Image, InputStyles, Paragraph } from '../../../styles';

const alignConteiners = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerForm = styled.div`
  ${alignConteiners}
  width: 516px;
  max-height: 353px;
  margin: 40px auto 56px;
  padding: 0;
  border-radius: 3px;
  border: solid 1px ${theme.colors.grey500};
  background-color: ${theme.colors.grey700};
`;

export const ContainerImage = styled.div`
  height: 5.5rem;
  margin: 1.5rem auto 1rem;
  position: relative;
`;

export const ImageUpload = styled.img`
  ${Image}
  border-radius: 2.25rem;
  cursor: pointer;
`;

export const IllustrativePicture = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
`;

export const ImageWithoutBackground = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 29.25rem;
`;

export const Input = styled.input`
  ${InputStyles}
  height: 2.5rem;
  margin: 0 0 0.5rem 0;
  padding: 0.75rem 1rem 0.688rem;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  ${InputStyles}
  height: 5rem;
  margin: 0 0 2rem 0;
  padding: 0.75rem 1rem 0.75rem;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const ContainerButtons = styled.div`
  height: 2.563rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.grey200};
  margin-bottom: 1.5rem;

  p {
    ${Paragraph}
    font-size: ${theme.sizes.small};
    line-height: 1.29;
    text-align: center;
    color: ${theme.colors.grey200};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export type ButtonProps = {
  bgColor?: keyof typeof theme.colors
  color?: keyof typeof theme.colors
}

export const Button = styled.button<ButtonProps>`
  width: 98px;
  height: 41px;
  margin-left: 24px;
  padding: 12px 24px;
  background-color: ${({ bgColor }) => theme.colors[bgColor || 'grey200']};
  border-radius: 8px;
  border: none;
  text-align: center;
  color: ${theme.colors.grey700};
  color: ${({ color }) => theme.colors[color || 'grey700']};
  cursor: pointer;
`;