import { Components, Theme } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import ButtonThemeVariants from '../variants/ButtonThemeVariants';
import buildbox from '../buildboxColors.json'

const { palette } = buildbox
const ButtonTheme: Components<Omit<Theme, 'components'>> = {
    MuiButton: {
        variants:ButtonThemeVariants,
        styleOverrides: {
            root: {

            }
        }
    }
}
export default ButtonTheme