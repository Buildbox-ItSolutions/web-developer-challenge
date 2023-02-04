import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 9.3rem;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  align-items: center;
  justify-content: center;
`   
