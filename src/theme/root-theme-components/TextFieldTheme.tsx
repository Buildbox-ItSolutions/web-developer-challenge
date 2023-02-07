import { Components, Theme } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import TextFieldThemeVariants from '../variants/TextFieldThemeVariants';
import buildbox from '../buildboxColors.json'

const { palette } = buildbox
const TextFieldTheme: Components<Omit<Theme, 'components'>> = {
    MuiTextField: {
        variants: TextFieldThemeVariants,
        styleOverrides: {

            root: {
                color: palette.greys.grey1,
                input: {
                    color: palette.whites.white,
                    '&::placeholder': {
                        color: palette.greys.grey1,
                    }
                },

                '& .MuiOutlinedInput-root.Mui-focused': {
                    "& > fieldset": {

                        borderColor: palette.secondary.value
                    }
                },
                '& .MuiOutlinedInput-root': {
                    color: palette.greys.grey1,
                    background: palette.secondary.value,
                    fontSize: '14px',
                    borderRadius: '8px',
                    outline: '0',
                    border: 0
                }
            }
        }
    }
}
export default TextFieldTheme