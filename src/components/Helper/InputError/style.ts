import styled from 'styled-components'

interface ThemeProps {
  theme: {
    errorColor: string
  }
}

export const Wrapper = styled.span<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.errorColor};
`
