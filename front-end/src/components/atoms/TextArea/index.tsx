import * as T from './styles'
import { IFormProps } from '../../../interfaces'

const TextArea = ({ name, id, onChangeTextArea, placeholder, value }: IFormProps) => {
  return (
    <T.TextArea
      name={name}
      id={id}
      onChange={onChangeTextArea}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default TextArea