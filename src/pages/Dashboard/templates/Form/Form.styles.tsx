import styled from 'styled-components';

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionActions = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const DiscardButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: #5f5f5f;
  font-size: 14px;
  height: 41px;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: underline;
  width: 98px;
`;

export const PublishButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#71bb00' : '#5f5f5f')};
  border: none;
  border-radius: 8px;
  color: ${({ active }) => (active ? '#fff' : '#4b4b4b')};
  height: 41px;
  cursor: pointer;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  width: 98px;
`;
