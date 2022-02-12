import styled from "styled-components";

export const FeedCardContainer = styled.div`
  width: 480px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  .deletingContainer {
    width: 100%;
    img {
      height: 20px;
      margin-bottom: 24px;
      float: right;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        transform: scale(1.2);
      }
    }
  }
  .message {
    width: 348px;
    margin-left: 32px;
    color: #9f9f9f;
    font-size: 16px;
    div {
      margin-top: 24px;
      font-size: 12px;
      color: #5f5f5f;
    }
    .name {
      font-size: 14px;
      color: #7a7a7a;
    }
  }
  .photo {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .profilePhoto {
      border-radius: 36px;
    }
  }
  @media screen and (max-width: 570px) {
    margin: 0 auto 16px;
    width: 80vw;
  }
`;
