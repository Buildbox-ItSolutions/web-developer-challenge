import { InputHTMLAttributes } from 'react'
import { InputContainer } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps): JSX.Element {
  return (
    <InputContainer>
      <input type="text" placeholder="Digite seu nome" {...rest} />
    </InputContainer>
  )
}
