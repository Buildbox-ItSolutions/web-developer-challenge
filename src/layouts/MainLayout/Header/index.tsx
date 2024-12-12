import React from 'react'
import { Stack } from '@mui/material'
import BxLogo from '../../../assets/BxLogo'


export default function Header() {
  return (
    <Stack
      position={'relative'}
      zIndex={1}
      boxShadow={'0px 1px 0px 0px #232323'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'93px'}
      bgcolor={'#2b2b2b'} >
      <BxLogo />
    </Stack>
  )
}
