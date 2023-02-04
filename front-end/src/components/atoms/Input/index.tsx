import * as F from './styles'
import { IFormProps } from '../../../interfaces';

const Input = ({ name, onChangeInput, id, value, type, placeholder }: IFormProps) => {
  return (
    <F.Input
      name={name}
      onChange={onChangeInput}
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input