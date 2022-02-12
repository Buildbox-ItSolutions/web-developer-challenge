import styled from "styled-components";

export const Content = styled.section`
  padding: 3rem 1rem;
`;

export const Wrapper = styled.div`
  max-width: 516px;
  margin: 0 auto;
`;

export const ContainerForm = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 3px;
  padding: 2rem;

  form {
    margin-top: 1.5rem;

    div.btns-actions {
      display: flex;
      justify-content: end;
      margin-top: 1rem;

      button {
        & + button {
          margin-left: 0.75rem;
        }

        &#btn-discard {
          color: ${({ theme }) => theme.colors.gray[100]};
          background: transparent;
          text-decoration: underline;
          border: 0;
        }

        &#btn-publish {
          height: 41px;
          border-radius: 8px;
          width: 98px;
          border: 0;
          background: ${({ theme }) => theme.colors.success};
          color: ${({ theme }) => theme.colors.white};

          &:disabled {
            color: ${({ theme }) => theme.colors.gray[500]};
            background-color: ${({ theme }) => theme.colors.gray[100]};
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;

export const ContainerFeed = styled.div`
  margin-top: 2rem;

  h5 {
    color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    margin-top: 0.5rem;
  }
`;
