import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import Logo from '../../../assets/logo/bx-logo.png'

const TopBar = () => {
    const theme = useTheme();
    return (
        <Box
            width='100%'
            height='93px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='fixed'
            zIndex={1}
            sx={{ backgroundColor: theme.palette.black4.main }}
        >
            <Box sx={{
                backgroundImage: `url(${Logo})`,
                height: '45px', width: '103px',
            }}>
            </Box>
        </Box>
    )
}

export default TopBar