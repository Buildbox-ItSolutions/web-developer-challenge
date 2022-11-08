import styled from 'styled-components';

export const Button = styled.button<{ typeButton: string }>`
  background-color: ${({ theme, typeButton, disabled }) =>
    typeButton === 'submit'
      ? disabled === true
        ? theme.grey100
        : theme.green300
      : 'transparent'};
  color: ${({ theme, typeButton, disabled }) =>
    typeButton === 'submit'
      ? disabled
        ? theme.grey400
        : theme.white
      : theme.grey100};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: normal;
  padding: 12px 24px;
  font-size: 14px;
  text-decoration: ${({ typeButton }) =>
    typeButton === 'submit' ? 'none' : 'underline'};
`;
