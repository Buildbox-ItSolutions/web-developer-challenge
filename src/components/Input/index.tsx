import React, { InputHTMLAttributes } from 'react'

/* style */
import * as S from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }): React.ReactElement => {
  return <S.Input {...rest} />
}

export default Input
