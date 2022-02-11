import styled from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  outline: 1px solid ${({ theme }) => theme.black['250']};
  height: 40px;
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
  padding: 12px 16px;
  background: ${({ theme }) => theme.black['250']};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: outline 200ms ease-out;

  &:focus,
  &:hover {
    outline-color: ${({ theme }) => theme.primary};
  }
`;
