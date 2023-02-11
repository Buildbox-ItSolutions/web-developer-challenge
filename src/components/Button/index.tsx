import React, { InputHTMLAttributes } from 'react'

/* types */
import * as S from './style'

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  label?: string
  isLink?: boolean
  isEnable?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<InputProps> = ({
  label,
  isLink = false,
  isEnable = false,
  ...props
}): React.ReactElement => {
  return (
    <S.Button isLink={isLink} isEnable={isEnable} {...props}>
      {label}
    </S.Button>
  )
}

export default Button
