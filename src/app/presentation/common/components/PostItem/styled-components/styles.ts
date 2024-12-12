import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 425px 16px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  > div.post__data {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.5rem 0;
    padding-right: 2rem;
    p {
      font-family: Roboto;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: left;
      color: #9f9f9f;
      margin-bottom: 20px;
    }
    .message-and-author {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 600px) {
    & {
      width: 90vw;
    }
  }
`;

export const ButtonRemove = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 25px;
`;

export const ImageItem = styled("img")`
  margin: 0 1rem 0 0;
  width: 88px;
  height: 88px;
  border-radius: 36px;
`;

export const SendBy = styled("span")`
  font-size: 0.8rem;
  color: #5f5f5f;
`;

export const Author = styled("span")`
  font-size: 0.9rem;
  color: #7a7a7a;
`;
