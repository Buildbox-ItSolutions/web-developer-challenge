import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type InputProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  size?: string
  type?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  icon,
  label,
  iconPosition = 'left',
  name,
  size,
  type,
  initialValue = '',
  disabled = false,
  onInput,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    onInput?.(newValue)
  }
  return (
    <S.InputField
      placeholder={label}
      size={size}
      type={type}
      onChange={onChange}
      value={value}
      iconPosition={iconPosition}
      disabled={disabled}
      name={name}
      hasIcon={!!icon}
      {...(label ? { id: name } : {})}
      {...props}
    />
  )
}

export default Input
