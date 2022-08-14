import styled, { css } from 'styled-components'

export type Variants = 'full' | 'empty'

type Props = {
  variant: Variants
}

const variants = {
  full: css`
    background-color: ${({ theme }) => theme.colors.primary.gray200};
    color: ${({ theme }) => theme.colors.primary.gray350};
    border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  `,
  empty: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.gray200};
    text-decoration: underline;
  `
}

export const Button = styled.button<Props>`
  width: 98px;
  height: 41px;
  ${({ variant }) => variants[variant]}
`
