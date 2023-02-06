import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.background[400]};
  border-radius: 6px;
  margin: 24px 0;

  background: ${({ theme }) => theme.colors.background[200]};

  width: 800px;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    padding: 0;
    border: 0;
    width: 100%;
  }

  padding: 0 24px;
  img {
    height: 150px;
    width: 150px;
    border: 1px solid ${({ theme }) => theme.colors.text[200]};
    border-radius: 58px;
    margin-right: 32px;
  }

  .delete-svg {
    align-self: flex-end;
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  .content {
    display: flex;
    align-items: center;
    padding: 38px 24px;

    @media (max-width: 400px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .post-content {
    p {
      font-weight: normal;
      line-height: 1.25;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text[400]};

      @media (max-width: 400px) {
        margin-top: 16px;
      }
    }

    .send-by {
      margin-top: 24px;
      color: ${({ theme }) => theme.colors.text[500]};
    }

    .author {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text[300]};
      margin-top: 8px;
    }
  }
`;
