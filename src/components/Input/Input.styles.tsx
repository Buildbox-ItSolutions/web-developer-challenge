import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  background-color: #494949;
  border-radius: 8px;
  border: none;
  padding: 6px 16px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #9f9f9f;
    line-height: 1.29;
  }
`
