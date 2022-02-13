// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    text-align: center;
    margin-top: 40px;
  }

  h6 {
    text-align: center;
    margin-top: 1.5rem;
    line-height: 32px;
  }

  @media screen and (max-width: 768px) {
    padding: 12px;
  }
`
