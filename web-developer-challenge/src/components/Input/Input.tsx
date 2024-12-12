import React from 'react'
import { InputStyled } from './InputStyles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    textArea?: boolean;
}

const Input: React.FC<InputProps> = ({textArea, ...rest})  => {
  return (
        <>
            <InputStyled {...rest}></InputStyled>
        </>
  )
}

export default Input;