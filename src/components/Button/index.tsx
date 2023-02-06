import styled from "styled-components";

export type Variant = 'link' | 'contained';

export interface ButtonProps {
  variant: Variant;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 12px 24px;
  margin-left: 24px;
  border: none;
  border-radius: 8px;
  background-color: ${({ variant, theme }) => variant === 'contained' ? theme.colors.primary : 'transparent'};
  font-size: 14px;
  color: ${({ variant, theme }) => variant === 'contained' ? '#FFF' : theme.colors.gray[ 350 ]};
  text-decoration: ${({ variant }) => variant === 'link' ? 'underline' : 'none'};
  transition: opacity .2s;

  &:active {
    opacity: .5;
  }

  &:disabled {
    background-color: ${({ variant, theme }) => variant === 'contained' ? theme.colors.gray[ 350 ] : 'transparent'};
    color: ${({ variant, theme }) => variant === 'contained' ? theme.colors.gray[ 450 ] : '#FFF'};
  }
`;
