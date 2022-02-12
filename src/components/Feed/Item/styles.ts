import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 3px;
  padding: 2rem;
  margin-top: 1rem;
  position: relative;

  button {
    display: block;
    background: transparent;
    border: 0;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: start;

  img {
    width: 88px;
    height: 88px;
    border-radius: 36px;
  }

  div#description {
    margin-left: 1rem;

    p {
      color: ${({ theme }) => theme.colors.gray[50]};
    }

    div {
      margin-top: 1rem;

      span {
        color: ${({ theme }) => theme.colors.gray[100]};
        font-size: 12px;
      }

      h6 {
        color: ${({ theme }) => theme.colors.gray[50]};
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div#description {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;
