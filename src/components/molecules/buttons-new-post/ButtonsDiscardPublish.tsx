import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
type ButtonsDiscardPublishType = {
    buttonDiscard?: ButtonProps
    buttonPublish?: ButtonProps
}

export default function ButtonsDiscardPublish({ buttonDiscard, buttonPublish }: ButtonsDiscardPublishType) {
    return (
        <Box display='flex'>
            <Button variant='text' color='grey2' {...buttonDiscard} sx={{
                textTransform: 'none', textDecoration: 'underline', ":hover": {
                    textDecoration: 'underline'
                }
            }}>
                Descartar
            </Button>

           
        <Button {...buttonPublish} variant='contained' sx={{ marginLeft: '24px', textTransform: 'none', borderRadius: '8px' }}>Publicar</Button>

        </Box>
    )
}
