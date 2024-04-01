import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  ${({
    theme: {
      borderRadius,
      colors: { field },
    },
  }) => css`
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 1.2rem 1.6rem;

    color: ${field.default.text};
    background-color: ${field.default.background};
    border: 0.1rem solid ${field.default.border};

    border-radius: ${borderRadius.field};

    transition: all 0.1s ease-in-out;

    &::placeholder {
      color: ${field.default.placeholder};
    }

    &:focus-visible {
      background-color: ${field.hovered.background};
      border-color: ${field.hovered.border};
    }

    &:focus {
      outline: none;
    }
  `}
`;

export const ErrorFeedbackSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.danger};
`;
