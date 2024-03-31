import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.button};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:not(:disabled):active {
    filter: brightness(90%);
  }

  &:disabled {
    color: ${(props) => props.theme.post};
    background-color: ${(props) => props.theme.credits};
    cursor: not-allowed;
  }
`
