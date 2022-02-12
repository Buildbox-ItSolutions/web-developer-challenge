import styled from "styled-components";

export const Content = styled.div`
  div {
    h2 {
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  button {
    height: 41px;
    border-radius: 8px;
    border: 0;
    padding: 0 15px;

    & + button {
      margin-left: 0.5rem;
    }

    &:first-child {
      color: ${({ theme }) => theme.colors.gray[500]};
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.danger};
    }
  }
`;
