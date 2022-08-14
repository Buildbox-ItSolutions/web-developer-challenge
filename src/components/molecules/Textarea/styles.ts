import styled from 'styled-components'

type InputProps = {
  fullWidth: boolean
}

export const Input = styled.textarea<InputProps>`
  height: 80px;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary.gray250};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  color: ${({ theme }) => theme.colors.primary.gray100};
  caret-color: white;

  resize: none;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.gray100};
  }
`
