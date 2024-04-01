import styled from 'styled-components'

export const NoPostsFoundContainer = styled.div`
  width: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`

export const NoPostsFoundText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 3rem;
  font-family: 'Pixelify Sans', sans-serif;
  font-optical-sizing: auto;
  text-align: center;

  > span {
    color: ${(props) => props.theme.button};
  }
`
