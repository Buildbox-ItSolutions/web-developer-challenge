import styled from 'styled-components'

type InputProps = {
  fullWidth: boolean
}

export const Input = styled.input<InputProps>`
  height: 40px;
  padding: 0 10px;

  background-color: ${({ theme }) => theme.colors.primary.gray250};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  color: ${({ theme }) => theme.colors.primary.gray100};
  caret-color: white;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.gray100};
  }
`
