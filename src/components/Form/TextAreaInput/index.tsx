import { forwardRef } from 'react'
import { TextAreaController } from './styles'

type TextAreaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  function TextAreaInput({ ...props }, ref) {
    return <TextAreaController {...props} ref={ref} />
  },
)

export default TextAreaInput
