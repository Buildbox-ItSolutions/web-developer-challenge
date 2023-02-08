import { ThemeOptions, createTheme } from '@mui/material';
import buildbox from './buildboxColors.json';

const { palette } = buildbox;
const customPalette = createTheme().palette;
const ColorTheme: ThemeOptions = {
    palette: {
        primary: {
            main: palette.primary.value,
            contrastText: palette.primary.contrastText
        },
        secondary: {
            main: palette.secondary.value,
            contrastText: palette.secondary.contrastText
        },
        white: customPalette.augmentColor({
            color: {
                main: palette.whites.white,
            },
        }),
        grey1: customPalette.augmentColor({
            color: {
                main: palette.greys.grey1,
            },
        }),
        grey2: customPalette.augmentColor({
            color: {
                main: palette.greys.grey2,
            },
        }),
        grey3: customPalette.augmentColor({
            color: {
                main: palette.greys.grey3,
            },
        }),
        black: customPalette.augmentColor({
            color: {
                main: palette.blacks['black'],
            },
        }),
        black2: customPalette.augmentColor({
            color: {
                main: palette.blacks.black2,
            },
        }),
        black3: customPalette.augmentColor({
            color: {
                main: palette.blacks.black3,
            },
        }),
        black4: customPalette.augmentColor({
            color: {
                main: palette.blacks.black4,
            },
        }),
        background:{
            default:palette.blacks.black
        }
    },
};

export default ColorTheme;