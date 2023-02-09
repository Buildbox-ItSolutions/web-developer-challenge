import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 2.5rem;
  width: 6rem;

  border-radius: 0.5rem;

  border: none;

  transition: filter 0.2s ease;

  &.primary {
    color: var(--color-gray-350);
    background: var(--color-green);

    &:disabled {
      background: var(--color-gray-100);
    }
  }

  &.secondary {
    text-decoration: underline;
    background: transparent;
    color: var(--color-gray-100);
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
