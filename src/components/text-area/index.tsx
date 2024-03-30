import { ComponentProps, forwardRef } from 'react'
import { Container } from './styles'

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<'textarea'>
>((props, ref) => <Container ref={ref} {...props} />)

TextArea.displayName = 'TextArea'
