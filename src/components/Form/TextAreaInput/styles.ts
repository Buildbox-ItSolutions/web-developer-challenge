import styled from 'styled-components'

export const TextAreaController = styled.textarea`
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme.white};
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme['gray-100']};
  }
`
