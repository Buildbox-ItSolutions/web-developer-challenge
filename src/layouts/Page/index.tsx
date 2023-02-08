import { Stack } from '@mui/material'
import React, {ReactNode} from 'react'
import { Helmet } from 'react-helmet'


interface PageProps {
  title: string,
  children: ReactNode
}

export default function Page({title, children}: PageProps) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <Stack height={'100%'} px={{ xl: '32%', lg: '20%', md: '14%' , sm: '8%', xs: 1 }} py={6} >
        {children}
      </Stack>

    </>
  )
}
