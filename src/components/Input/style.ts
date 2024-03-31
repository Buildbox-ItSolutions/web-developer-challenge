import styled from 'styled-components'

export const InputContainer = styled.div`
  > input {
    font-size: 0.875rem;
    line-height: 1.29;
    font-weight: normal;
    color: ${(props) => props.theme.white};
    padding: 0.75rem 1rem;
    width: 100%;
    height: 2.5rem;
    background-color: ${(props) => props.theme.input};
    border: none;
    border-radius: 8px;

    &::placeholder {
      color: ${(props) => props.theme.text};
    }
  }
`
