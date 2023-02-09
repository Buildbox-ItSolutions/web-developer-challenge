import { createTheme } from "@mui/material";
import ColorTheme from "./ColorTheme";
import TextFieldTheme from "./root-theme-components/TextFieldTheme";
import ButtonTheme from "./root-theme-components/ButtonTheme";

const { palette } = ColorTheme
const { MuiTextField } = TextFieldTheme
const { MuiButton} = ButtonTheme

const DefaultTheme = createTheme({
    palette,
    components: {
        MuiTextField,
        MuiButton,
    }
})

export default DefaultTheme