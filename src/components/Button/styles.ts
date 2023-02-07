import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 2.5rem;
  width: 6rem;

  border-radius: 0.5rem;

  border: none;

  &.primary {
    background: var(--color-gray-100);
    color: var(--color-gray-350);
  }

  &.secondary {
    text-decoration: underline;
    background: transparent;
    color: var(--color-gray-100);
  }

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;
