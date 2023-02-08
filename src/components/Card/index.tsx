import { BoxProps, Stack } from '@mui/material'
import React from 'react'

interface CardProps extends BoxProps {

}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <Stack
      p={3}
      alignItems={'center'}
      justifyContent={'center'}
      border={'1px solid #3b3b3b'}
      borderRadius={1}
      bgcolor={'#313131'}
      {...rest}
    >
      {children}
    </Stack>
  )
}
