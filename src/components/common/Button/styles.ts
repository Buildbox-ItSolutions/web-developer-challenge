import styled, { css } from 'styled-components';

import { ButtonVariant } from '.';

type ButtonStyledProps = {
  $variant: ButtonVariant;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  transition: all 0.1s ease-in-out;

  &:disabled {
    cursor: default;
    pointer-events: none;
  }

  ${({
    $variant: variant,
    theme: {
      borderRadius,
      colors: { button, text },
    },
  }) => {
    switch (variant) {
      case 'ghost':
        return css`
          padding: 0;
          outline: none;
          border: none;

          color: ${text[700]};
          background-color: transparent;

          text-decoration: underline;

          &:hover {
            color: ${text[600]};
          }

          &:disabled {
            text-decoration: none;
          }
        `;
      default:
        return css`
          border-radius: ${borderRadius.button};

          padding: 1.2rem 2.4rem;
          outline: none;
          border: none;

          color: ${button.default.text};
          background-color: ${button.default.background};

          &:hover {
            background-color: ${button.hovered.background};
          }

          &:disabled {
            color: ${button.disabled.text};
            background-color: ${button.disabled.background};
          }
        `;
    }
  }}
`;
