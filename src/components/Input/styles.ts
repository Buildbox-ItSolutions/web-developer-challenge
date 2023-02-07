import styled from "styled-components";

interface Props {
  height: number;
}

export const InputContainer = styled.div<Props>`
  height: ${({ height }) => height}rem;
  min-height: 2.5rem;
  width: 100%;

  border-radius: 0.5rem;
  overflow: hidden;

  > input {
    height: 100%;
    width: 100%;

    padding: 0.7rem 1rem;
    background: var(--color-gray-175);

    font-size: 1rem;
    font-weight: normal;
    color: var(--color-gray-25);

    &::placeholder {
      font-size: 1rem;
      font-weight: normal;
      color: var(--color-gray-25);
    }
  }
`;
