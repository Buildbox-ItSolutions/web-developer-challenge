import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h4`
  display: flex;
  justify-content:center;
  align-items: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.gray[200]}
`