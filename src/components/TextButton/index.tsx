import { ButtonHTMLAttributes } from 'react'
import { TextButtonContainer } from './style'

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function TextButton({ text, ...rest }: TextButtonProps): JSX.Element {
  return <TextButtonContainer {...rest}>{text}</TextButtonContainer>
}
