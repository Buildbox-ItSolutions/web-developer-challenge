import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  border-radius: 4px;

  width: 100%;

  border: 1px solid ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-800']};
`
