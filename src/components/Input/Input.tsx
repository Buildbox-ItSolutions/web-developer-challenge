import React from 'react'

import { InputStyled, Props } from '.'

const Input: React.FC<Props> = ({ ...rest }) => {
  return <InputStyled {...rest} />
}

export default Input
