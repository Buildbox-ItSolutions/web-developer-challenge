import styled from "styled-components";

export const FeedContainer = styled.section`
  width: 518px;
  margin: 56px 0 16px;
  .photo {
    width: 68px;
    height: 68px;
    border: 10px solid red;
    border-radius: 50%;
  }
  .feed {
    font-size: 14px;
    color: #7a7a7a;
    margin-bottom: 8px;
  }
  .xbox {
    width: 20px;
    height: 20px;
  }
  p {
    margin: 0;
  }
`;
export const FeedMessages = styled.div`
  width: 480px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-wrap: wrap;
  .deletingContainer {
    width: 100%;
  }
  img {
    height: 20px;
    margin-bottom: 24px;
    float: right;
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
`;
