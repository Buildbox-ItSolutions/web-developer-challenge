import styled from "styled-components";

export const PostItemContainer = styled.div`
  width: 465px;
  height: 225px;
  border: solid 1px #3b3b3b;
  border-radius: 3px;
  background-color: #313131;
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 12px 24px 12px 24px;
  position: relative;

  .delete-btn {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .post-image {
  }

  .post-image img {
    width: 88px;
    height: 88px;
    object-fit: cover;
    border-radius: 36px;
  }

  .post-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 16px;
    text-align: left;
    line-height: 20px;
    color: #9f9f9f;
    margin-top: 60px;
  }

  .post-text p {
    overflow-wrap: break-word;
    width: 300px;
    height: 80px;
    overflow: hidden;
  }

  .author {
    font-size: 14px;
    color: #7a7a7a;
    line-height: 18px;
  }

  .author span {
    font-size: 12px;
    color: #5f5f5f;
    letter-spacing: 0.29px;
    text-align: left;
  }
`;
