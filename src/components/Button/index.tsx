import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

export type ButtonVariants = 'primary' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
}

export function Button({ variant, ...props }: ButtonProps) {
  return <StyledButton {...props} $variant={variant} />
}
