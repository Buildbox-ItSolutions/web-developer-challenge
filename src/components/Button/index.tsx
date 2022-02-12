import React from 'react'
import { ButtonStyled } from './style'

interface ButtonProps {
    children: string
    onClick?: () => void;
}

export function Button(props : ButtonProps) {
  const { children, ...rest } = props
  return (
    <>
      <ButtonStyled {...rest}>{children}</ButtonStyled>  
    </>
  )
}
