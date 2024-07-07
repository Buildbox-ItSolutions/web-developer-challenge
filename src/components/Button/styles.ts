import styled, { css } from 'styled-components'
import { ButtonVariants } from '.'

export const StyledButton = styled.button<{ $variant: ButtonVariants }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 300;
  cursor: pointer;

  transition:
    background-color 0.3s,
    color 0.3s;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme['green-700']};
      }

      &:disabled {
        background: ${(props) => props.theme['gray-200']};
        cursor: auto;
      }
    `}

  ${(props) =>
    props.$variant === 'link' &&
    css`
      padding: 0.25;
      background: transparent;
      color: ${(props) => props.theme['gray-200']};
      font-weight: 400;
      text-decoration: underline;

      &:hover {
        color: ${(props) => props.theme['gray-100']};
      }

      &:disabled {
        cursor: auto;
      }
    `}
`
