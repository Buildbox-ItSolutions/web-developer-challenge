import styled from 'styled-components'

export const TextButtonContainer = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${(props) => props.theme.credits};
  text-decoration: underline;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
