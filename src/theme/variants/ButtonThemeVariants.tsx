import { ButtonProps, Interpolation, Theme } from '@mui/material'
import buildbox from '../buildboxColors.json'

type ButtonVariantsType = {
    props: ButtonProps;
    style: Interpolation<{ theme: Theme }>;
}

const { palette } = buildbox;
const ButtonThemeVariants: ButtonVariantsType[] = [
    {
        props: { disabled: true, variant: 'contained' },
        style: {
            backgroundColor: `${palette.greys.grey2}!important`,
            color: `${palette.blacks.black2}!important`,
        }
    },
    {
        props: { disabled: true, variant: 'text' },
        style: {
            backgroundColor: `transparent !important`,
            color: `${palette.greys.grey2}!important`,
        }
    }
]

export default ButtonThemeVariants