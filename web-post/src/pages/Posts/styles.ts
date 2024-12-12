import styled from "styled-components";

export const Post = styled.div`
  width: 516px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media (max-width: 523px) {
    width: 100%;
    padding: 1rem;
  }
  strong {
    margin-bottom: 1rem;
    display: block;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  background: var(--gray-800);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem 2rem 2.4rem 2rem;
  margin-top: 1rem;
  @media (max-width: 250px) {
    padding: 0.5rem;
  }
  button {
    background: none;
    border: 1px solid var(--red-200);
    margin-left: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    color: var(--red-200);
    position: relative;
    margin-bottom: 1rem;
    @media (max-width: 250px) {
      flex-direction: column;
    }
    p {
      font-size: 0.8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);
    }
  }

  div {
    display: flex;
    justify-content: center;
    @media (max-width: 250px) {
      flex-direction: column;
    }
    img {
      width: 88px;
      height: 88px;
      border-radius: 36px;
      margin-right: 1rem;

      @media (max-width: 250px) {
        width: 60px;
        height: 60px;
        margin: 0 auto;
      }
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      @media (max-width: 250px) {
        text-align: center;
        width: 100%;
      }
      p {
        word-break: break-all;
        margin-bottom: 1rem;
      }

      span {
        p {
          font-size: 0.9rem;
          color: #5f5f5f;
          margin: 0;
        }
        strong {
          color: #7a7a7a;
          font-weight: 400;
        }
      }
    }
  }
`;
