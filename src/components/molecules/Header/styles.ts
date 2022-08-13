import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary.gray500};
  height: 93px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.gray900};
`
