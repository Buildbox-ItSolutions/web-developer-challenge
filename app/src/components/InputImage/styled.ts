import styled from "styled-components"

export const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 30px;
`

export const InputWrapper = styled.label`
  input {
    display: none !important;
  }
  border: 1px solid #454545;
  svg {
    width: 40px;
    height: 40px;
    color: #9F9F9F;
  }
  border-radius: 30px;
  cursor: pointer;
`