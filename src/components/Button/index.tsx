import React, { MouseEvent } from 'react'
import { ButtonStyled } from './style'
import { SubmitHandler } from '@unform/core'

interface ButtonProps {
    children: string;
    bgColor?: string;
    onClick?: () => void;
}

export function Button(props : ButtonProps) {
  const { children, onClick,...rest } = props
  return (
    <>
      <ButtonStyled {...rest} onClick={onClick}>{children}</ButtonStyled>  
    </>
  )
}
