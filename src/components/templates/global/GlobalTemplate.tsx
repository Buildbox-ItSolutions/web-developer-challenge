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
            height='calc(100vh - 93px)'
            sx={{ backgroundColor: theme.palette.background.default }}
        >
            {children}

        </Grid>
    )
}

export default GlobalTemplate