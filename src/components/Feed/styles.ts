import styled from "styled-components";

export const Title = styled.span`
  min-width: 40.625rem;

  color: var(--feed-color);

  margin-bottom: 0.5rem;

  @media screen and (max-width: 615px) {
    min-width: 90%;
    height: auto;
  }
`;

export const Container = styled.div`
  width: 40.625rem;
  /* width: 650px; */
  height: auto;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--box-border);
  background: var(--primary);

  border-radius: 0.1875rem;

  padding: 0 1.25rem 2.5rem;
  color: var(--primary-text);

  margin-bottom: 1rem;

  .close-button-container {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    margin: 1rem 0 1rem 0;

    > svg {
      color: #cb5522;
      height: 1.5625rem;
      width: 1.5625rem;

      cursor: pointer;

      transition: all 200ms ease-in-out;

      &:hover {
        filter: brightness(0.75);
      }
    }
  }

  .content-wrapper {
    display: flex;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 5.5rem;
      width: 5.5rem;

      border: 1px solid #4b4b4b;
      border-radius: 2.25rem;

      margin-right: 2rem;
      margin-left: 0.75rem;

      > img {
        height: 5.4rem;
        width: 5.4rem;

        border-radius: 2.25rem;
      }
    }

    .text-section {
      font-size: 1rem;
      text-align: left;

      line-height: 1.25;

      padding-right: 2rem;

      > p {
        margin-bottom: 1.5rem;
      }

      .send-by {
        display: flex;
        flex-direction: column;

        span:first-child {
          font-weight: 500;
          font-size: 0.75rem;

          margin-bottom: 0.25rem;

          color: var(--primary-button);
        }

        span:last-child {
          color: var(--feed-color);
          font-size: 0.875rem;
        }
      }
    }
  }

  @media screen and (max-width: 615px) {
    width: 90%;
    height: auto;
  }
`;
