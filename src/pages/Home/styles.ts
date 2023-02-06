import styled from "styled-components";

export const Container = styled.div<{
  buttonStatus: boolean;
}>`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 600px) {
    display: block;
  }

  h1 {
    font-size: 30px;
  }

  .post-form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 32px;

    padding: 24px;

    width: 800px;
    @media (max-width: 1000px) {
      width: 500px;
    }
    @media (max-width: 600px) {
      padding: 24px 0;
      border: 0;
      width: 100%;
    }

    background: ${({ theme }) => theme.colors.background[200]};
    border: 1px solid ${({ theme }) => theme.colors.background[400]};
    border-radius: 6px;

    .buttons-div {
      display: flex;
      align-items: center;
      margin-top: 12px;
      align-self: flex-end;

      p {
        color: ${({ theme }) => theme.colors.text[200]};
        text-decoration: underline;
        cursor: pointer;
        font-size: 16px;
        margin-right: 16px;
      }

      button {
        background: ${({ theme, buttonStatus }) =>
          buttonStatus
            ? theme.colors.primary[100]
            : theme.colors.background[500]};
        color: ${({ theme, buttonStatus }) =>
          buttonStatus ? theme.colors.text[100] : theme.colors.text[1000]};

        font-size: 16px;
        border: none;
        outline: none;
        padding: 12px 22px;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
`;
