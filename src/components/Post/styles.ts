import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  gap: 1.5rem;

  height: 14rem;
  width: 100%;

  padding: 2rem 5rem;

  border-radius: 0.2rem;
  border: 2px solid var(--color-gray-200);
  background: var(--color-gray-350);

  .imageContainer {
    height: 5.5rem;
    width: 5.5rem;

    position: relative;

    overflow: hidden;

    border-radius: 2.25rem;
  }

  .informationContainer,
  .informationName {
    display: flex;
    flex-direction: column;
  }

  .informationContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    height: 100%;

    .informationMessage {
      height: 6rem;
      width: 12rem;

      word-wrap: break-word;

      margin-bottom: 0.5rem;

      p {
        text-align: left;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.25rem;

        color: var(--color-gray-25);
      }
    }

    .informationName {
      display: flex;
      flex-direction: column;

      position: absolute;
      bottom: 0;
      left: 0;

      strong {
        font-size: 0.8rem;
        font-weight: 500;

        color: var(--color-gray-100);
      }

      span {
        font-size: 0.8rem;
        font-weight: normal;

        color: var(--color-gray-125);
      }
    }
  }

  .buttonRemove {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;

    background: transparent;
    border: none;

    transition: transform 0.2s ease-in-out;

    svg {
      height: 20px;
      width: 20px;
      color: var(--color-orange);
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
