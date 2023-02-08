import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import { useTheme } from "@mui/material/styles"

type GlobalTemplateType = {
    children: JSX.Element;
}

const GlobalTemplate = ({ children }: GlobalTemplateType) => {
    const theme = useTheme()
    return (

        <Grid item xs={12}
            display="flex"
            flexDirection='column'
            alignItems="center"
            minHeight='100vh'
            height='auto'
            sx={{ backgroundColor: theme.palette.background.default }}
        >
            <Box mt='93px'>
            {children}
            </Box>

        </Grid>
    )
}

export default GlobalTemplate