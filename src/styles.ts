import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32.25rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: calc(${(props) => props.theme.spacing[10]} + 5.8125rem) auto;

  @media screen and (max-width: 640px) {
    padding: 0 ${(props) => props.theme.spacing[4]};
  }
`
