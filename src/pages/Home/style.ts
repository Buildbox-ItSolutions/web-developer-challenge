import styled from 'styled-components'

export const Home = styled.div`
  display: flex;

  padding: 40px;

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 600px) {
    padding: 25px 15px;
  }
`
