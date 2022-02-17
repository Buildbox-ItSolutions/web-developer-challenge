/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import defaultTheme from '../../../theme/defaultTheme'
import erros from '../../../utils/fieldFormErros/errors.json'
import * as S from './style'

interface InputErrorProps {
  type: string
  field: string
  className?: string
}

const InputError: React.FC<InputErrorProps> = ({ type, field }) => {
  return (
    // @ts-expect-error
    <S.Wrapper theme={defaultTheme}>{erros[field][type]}</S.Wrapper>
  )
}

export default InputError
