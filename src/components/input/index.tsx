import { ComponentProps, forwardRef } from 'react'
import { Container } from './styles'

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  (props, ref) => <Container ref={ref} {...props} />,
)

Input.displayName = 'Input'
