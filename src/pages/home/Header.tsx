import { Box } from "./Styles";

import Logo from "../../assets/bx-logo.png"

export default function Header() {
    return(
        <Box>
            <img style={{backgroundColor: "var(--grey-0)"}} src={Logo} alt="logo"/>
        </Box>  
    )
}