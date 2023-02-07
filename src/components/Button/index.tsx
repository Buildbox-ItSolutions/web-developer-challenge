import React, { InputHTMLAttributes } from 'react'

/* types */
import * as S from './style'

interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  label?: string
  isLink?: boolean
  isEnable?: boolean
}

const Button: React.FC<InputProps> = ({
  label,
  isLink = false,
  isEnable = false
}): React.ReactElement => {
  return (
    <S.Button isLink={isLink} isEnable={isEnable}>
      {label}
    </S.Button>
  )
}

export default Button
