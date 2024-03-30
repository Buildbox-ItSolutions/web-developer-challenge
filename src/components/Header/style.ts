import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 2.4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blackDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`
