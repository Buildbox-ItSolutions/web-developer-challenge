import styled from "styled-components";

export const FeedItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 240px;
  padding: 16px 32px;
  box-sizing: border-box;
  background-color: #242424;
  margin-bottom: 32px;
  border: 1px solid #474747;
  position: relative;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  height: 100%;
  width: 100%;
  max-height: 96px;
  max-width: 96px;
  border-radius: 42%;
  margin-right: 24px;
`;

export const Message = styled.p`
  padding: 0 4px;
`;

export const AuthorInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.6;
  }
`;

export const SentBy = styled.span`
  font-size: 12px;
`;

export const AuthorName = styled.strong`
  font-size: 13px;
`;
