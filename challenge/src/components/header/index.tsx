import React from 'react'
import Box from '@mui/material/Box';
import Logo from '../../assets/bx-logo@2x.png'
import { AppBarStyled, Image } from './styles'

const Header = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
          <Image src={Logo} alt="img" />
      </AppBarStyled>
    </Box>
    )
}

export default Header