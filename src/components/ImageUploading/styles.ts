import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  position: relative;

  .buttonTrash {
    position: absolute;
    height: 100%;

    right: -3rem;
    margin: auto 0;

    border: none;
    background: transparent;

    transition: transform 0.2s ease-in-out;

    > svg {
      height: 24px;
      width: 24px;
      color: var(--color-orange);
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .imageContent {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5.5rem;
    width: 5.5rem;

    border-radius: 2.25rem;
    border: 1px solid var(--color-gray-150);

    overflow: hidden;

    position: relative;

    > button {
      height: 100%;
      width: 100%;

      background: transparent;
      border: none;

      > svg {
        height: 24px;
        width: 24px;

        color: var(--color-gray-25);
      }
    }

    .preview {
      height: 100%;
      width: 100%;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }
`;
