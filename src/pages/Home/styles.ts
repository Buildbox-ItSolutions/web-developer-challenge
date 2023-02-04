import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 32.25rem;
  margin: 2.5rem auto;
  padding: 0 1rem;
`

export const FeedLabel = styled.h2`
  color: ${(props) => props.theme['gray-350']};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.29;
`