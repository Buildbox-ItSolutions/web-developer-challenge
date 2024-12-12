import { Stack } from '@mui/system'
import React from 'react'
import BxLogo from '../../assets/BxLogo'

import './style.css'

interface LoadingScreenProps {
  disableLogo?: boolean,
}
export default function LoadingScreen({disableLogo = true}: LoadingScreenProps) {
  return (
    <Stack gap={3} alignItems={'center'} justifyContent={'center'} flex={1} width={'100%'} height={'100%'} >
      {disableLogo && <BxLogo />}
      <span className="loader"/>
    </Stack>
  )
}
