import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`