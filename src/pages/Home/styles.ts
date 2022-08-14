import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 516px;
  margin: 0 auto;
  padding: 0 30px;

  > article + article {
    margin-top: 16px;
  }
`

export const Title = styled.h5`
  align-self: flex-start;
  margin: 56px 0 8px;
  color: ${({ theme }) => theme.colors.primary.gray150};
  font-size: 18px;
  font-weight: 500;
`
