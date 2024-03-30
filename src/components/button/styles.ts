import styled from 'styled-components'
import { ButtonProps } from '.'

export const Container = styled.button<ButtonProps>`
  outline: none;
  border: none;
  height: ${(props) => props.theme.spacing[10]};
  min-width: 6.125rem;
  padding: ${(props) => `${props.theme.spacing[3]} ${props.theme.spacing[6]}`};
  border-radius: ${(props) => props.theme.radius.lg};
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green[500] : theme.colors.transparent};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-decoration: ${({ variant }) =>
    variant === 'primary' ? 'none' : 'underline'};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.gray[700] : theme.colors.gray[200]};
    background-color: ${({ variant, theme }) =>
      variant === 'primary' && theme.colors.gray[200]};
    opacity: 0.5;
    cursor: not-allowed;
  }
`
