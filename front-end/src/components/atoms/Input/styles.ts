import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  } 


`