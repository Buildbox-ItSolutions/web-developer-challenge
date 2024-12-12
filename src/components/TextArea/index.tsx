import { TextareaHTMLAttributes } from 'react'
import { TextAreaContainer } from './style'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ ...rest }: TextAreaProps): JSX.Element {
  return (
    <TextAreaContainer>
      <textarea placeholder="Mensagem" {...rest} />
    </TextAreaContainer>
  )
}
