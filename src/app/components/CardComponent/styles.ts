import styled from "styled-components";

export const Card = styled.div`
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  color: #9f9f9f;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  header {
    display: flex;
    button {
      background: none;
      border: none;
      margin-left: auto;
      cursor: pointer;
      svg {
        color: #d65923;
      }
    }
  }
  span {
    color: #5f5f5f;
  }
  main {
    display: flex;
    .card-content {
      display: flex;
      flex-direction: column;
      margin-left: 32px;
      margin-right: 24px;
      .send-for {
        margin-top: 20px;
        p {
          margin: 0;
          font-size: 14px;
        }
        span {
          font-size: 12px;
        }
      }
    }
    .img {
      margin-top: 12px;
      min-width: 88px;
      height: 88px;
      width: 88px;
      object-fit: cover;
      border-radius: 36px;
    }
  }

  & + & {
    margin-top: 16px;
  }
`;
