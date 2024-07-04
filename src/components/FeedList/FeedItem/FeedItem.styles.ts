import styled from "styled-components";

export const FeedItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 320px;
  padding: 16px 32px;
  box-sizing: border-box;
  background-color: #242424;
  margin-bottom: 32px;
  border: 1px solid #474747;
  position: relative;
`;

export const Avatar = styled.img`
  height: 100%;
  width: 100%;
  max-height: 96px;
  max-width: 96px;
  border-radius: 40%;
  margin-right: 24px;
`;

export const AuthorContent = styled.section`
  display: flex;
  flex-direction: column;
`;

export const RemoveFeedItem = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const SendBy = styled.span`
  font-size: 12px;
`;

export const Name = styled.strong`
  font-size: 13px;
`;
