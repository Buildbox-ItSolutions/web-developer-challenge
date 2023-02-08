import { styled } from '@mui/material'
import React from 'react'

const Button = styled('button')(({theme}) => ({
  backgroundColor: '#71BB00',
  padding: '12px 24px',
  outline: 'none',
  border: 'none',
  borderRadius: '8px',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '14px',
  lineHeight: 1.29,
  textAlign: 'center',
  cursor: 'pointer',
  transition: '200ms',
  
  '&:hover': {
    backgroundColor: '#82cc11',
    transform: 'scale(1.1)'
  }
}))

export default Button