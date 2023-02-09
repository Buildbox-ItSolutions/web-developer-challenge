import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import { SxProps } from '@mui/material/styles'
type ButtonsDiscardPublishType = {
    buttonDiscard?: ButtonProps
    buttonPublish?: ButtonProps
    sx?: SxProps
    sxButtons?: SxProps
}

export default function ButtonsDiscardPublish({ buttonDiscard, buttonPublish, sx, sxButtons }: ButtonsDiscardPublishType) {
    return (
        <Box display='flex' sx={{ ...sx }} >
            <Button variant='text' color='grey2' {...buttonDiscard}  sx={{
                
                textTransform: 'none', textDecoration: 'underline', ":hover": {
                    textDecoration: 'underline'
                },
                ...sxButtons
            }}>
                Descartar
            </Button>


            <Button {...buttonPublish} variant='contained' sx={{ textTransform: 'none', borderRadius: '8px', ...sxButtons }}>Publicar</Button>

        </Box>
    )
}
