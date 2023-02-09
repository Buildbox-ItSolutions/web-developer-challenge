import { TextFieldProps, Interpolation, Theme } from '@mui/material'
import buildbox from '../buildboxColors.json'

type TextFieldVariantsType = {
    props: TextFieldProps;
    style: Interpolation<{ theme: Theme }>;
}[]

const { palette } = buildbox;
const TextFieldThemeVariants: TextFieldVariantsType = [
    {
        props: { className: 'textArea' },
        style: {
            input: {
                color: palette.whites.white,
                '&::placeholder': {
                    color: palette.greys.grey1,
                }
            },
        }
    },
]

export default TextFieldThemeVariants