import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: ButtonProps): JSX.Element {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>
}
