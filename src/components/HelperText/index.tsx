import { Error } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

interface HelperTextProps {
  message?: string;
  showError?: boolean
}

export default function HelperText({ message = '', showError = false }: HelperTextProps) {
  return (
    <>
      {
        showError &&
        <Stack gap={1} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} color={'#BB0000'} flexDirection={'row'} >
          <Error style={{height: '16px', width: '16px', marginTop: '-2px'}} />
          <Typography alignItems={'center'} variant={'caption'} >{message}</Typography>
        </Stack>
      }
    </>
  )
}
