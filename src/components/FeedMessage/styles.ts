import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: ${({ theme }) => theme.grey400};
  border: solid 1px ${({ theme }) => theme.grey.border};
  border-radius: 3px;
  color: ${({ theme }) => theme.font.color};
  margin-bottom: 16px;
  padding: 10px 12px 32px 24px;
  width: 100%;
  font-size: 16px;

  animation: fadeIn 2s;
`;

export const DeleteFeed = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;

export const Card = styled.div``;

export const MessageGroup = styled.div`
  display: flex;
  gap: 32px;
`;

export const ImageUser = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 36px;
`;

export const Message = styled.div`
  margin-bottom: 24px;
`;

export const SentBy = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.grey100};
`;

export const Author = styled.div`
  color: ${({ theme }) => theme.grey200};
`;
