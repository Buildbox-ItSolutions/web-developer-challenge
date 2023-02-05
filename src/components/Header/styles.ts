import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};

  img {
    height: 2.8rem;
  }
`