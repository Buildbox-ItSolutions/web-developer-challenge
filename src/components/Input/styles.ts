import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.grey300};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 8px;
  font-size: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.font.color};
  }
`;
