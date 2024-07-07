import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};

  background-color: ${(props) => props.theme['gray-800']};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['green-500']};
`
export const SubTitle = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
`
