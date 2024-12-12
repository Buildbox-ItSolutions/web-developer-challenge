import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import BxLogo from '../../../assets/BxLogo'
import Link from '../../../components/Link'

export default function Footer() {
  return (
    <Stack
      bottom={0}
      alignItems={'flex-start'}
      paddingLeft={8}
      px={{xs: 2, sm: 4}}
      py={8}
      justifyContent={'flex-start'}
      height={'100%'}
      bgcolor={'#2b2b2b'}
    >

      <Stack width={'100%'} justifyContent={'space-between'} flexDirection={'row'} >
        <Stack flex={1}>
          <BxLogo />
          <Typography color={'#9f9f9f'} variant={'caption'} >Challenge Post buildBox by:</Typography>
          <Typography color={'#9f9f9f'} variant={'button'} > Mateus Martins</Typography>
        </Stack>
        <Stack flex={1} alignItems={{xs: 'flex-end', sm: 'flex-start'}} >
          <Typography color={'#9f9f9f'} variant={'button'} >Créditos</Typography>
          <Link href="https://www.flaticon.com/free-icons/box" title="box icons">Box icons created by Freepik - Flaticon</Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
