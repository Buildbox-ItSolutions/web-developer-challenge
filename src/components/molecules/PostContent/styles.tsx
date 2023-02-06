import styled from "styled-components";

export const Title = styled.span`
  font-weight: bold;
  color: #7a7a7a;
`;

export const Description = styled.span`
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 24px;
  word-break: break-all;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 24px;
  padding-bottom: 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  padding-right: 12px;
`;

export const ContentRow = styled.div`
  display: flex;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

export const SendByText = styled.span`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.29px;
  color: #5f5f5f;
  line-height: 2;
`;

export const AuthorText = styled.span`
  font-size: 14px;
  color: #7a7a7a;
`;
