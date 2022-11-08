import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  margin: 8px 0 32px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.grey300};
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.white};

  ::placeholder {
    color: ${({ theme }) => theme.font.color};
  }
`;
