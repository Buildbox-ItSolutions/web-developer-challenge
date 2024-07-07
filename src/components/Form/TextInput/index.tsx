import { forwardRef } from 'react'
import { TextInputController } from './styles'

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ ...props }, ref) {
    return <TextInputController type="text" {...props} ref={ref} />
  },
)

export default TextInput
