import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 48px);
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  padding: 56px 24px 32px 24px;
  position: relative;
  margin-bottom: 16px;

  .RemoveIcon {
    position: absolute;
    right: 0;
    top: 0;
    margin: 12px;
    cursor: pointer;
  }

  .ImagePost {
    text-align: center;
    width: 88px;
    height: 88px;
    object-fit: cover;
  }

  p {
    color: #9f9f9f;
    word-break: break-all;
    width: 90%;
    max-width: 348px;
    text-align: justify;
  }

  p:nth-child(2) {
    margin-top: 24px;
    font-size: 12px;
    font-weight: 500;
    color: #5f5f5f;
    text-align: center;
    width: 70px;
  }

  p:nth-child(3) {
    font-size: 14px;
    margin-top: 2px;
    color: #7a7a7a;
    text-align: center;
    align-self: center;
  }

  .Post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    p:nth-child(2) {
      margin-top: 24px;
      font-size: 12px;
      font-weight: 500;
      color: #5f5f5f;
      text-align: left;
    }

    p:nth-child(3) {
      font-size: 14px;
      margin-top: 2px;
      color: #7a7a7a;
      text-align: left;
    }
    .Post {
      flex-direction: row;
      justify-content: initial;
      align-items: flex-start;
      div {
        display: initial;
        width: 90%;
        max-width: 348px;
      }

      img {
        margin-right: 34px;
      }
    }
  }
`;
