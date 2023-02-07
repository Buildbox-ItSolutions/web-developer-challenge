import React, { InputHTMLAttributes } from 'react'

/* style */
import * as S from './style'

type InputProps = InputHTMLAttributes<HTMLTextAreaElement>

const InputTextArea: React.FC<InputProps> = ({
  ...rest
}): React.ReactElement => {
  return <S.InputTextArea {...rest}></S.InputTextArea>
}

export default InputTextArea
