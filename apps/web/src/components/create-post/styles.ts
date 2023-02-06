import styled from 'styled-components';

export const CreatePostStyled = styled.div`
  > div {
    width: 90%;
    max-width: 516px;
    min-height: 353px;
    margin: auto;
    padding: 24px;
    border-radius: 3px;
    align-items: center;

    margin-top: 42px;

    > div {
      width: 100%;
    }

    > div:first-child {
      margin-bottom: 16px;
    }

    &,
    > div:nth-child(2),
    > div:last-child,
    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > div:nth-child(2) {
      gap: 8px;
    }

    > div:last-child {
      margin-top: 32px;

      flex-direction: row;
      justify-content: flex-end;

      a {
        width: fit-content;
        margin-right: 24px;
        cursor: pointer;
        text-decoration: underline;
        color: ${({ theme }) => theme.textColorDown};
      }
    }
  }
`;
