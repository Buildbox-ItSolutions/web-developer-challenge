import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 14rem;
  width: 100%;

  padding: 0.8rem;

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

    gap: 0.5rem;
  }

  .informationContainer {
    p {
      text-align: left;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.25rem;
    }

    .informationName {
      strong {
        font-size: 0.8rem;
        font-weight: 500;
      }

      span {
        font-size: 0.8rem;
        font-weight: normal;
      }
    }
  }
`;
