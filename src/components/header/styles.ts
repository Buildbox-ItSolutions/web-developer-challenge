import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 5.8125rem;
  padding: ${({ theme }) => theme.spacing[4]} 0;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Logo = styled.img`
  width: 6.25rem;
  height: auto;
`
