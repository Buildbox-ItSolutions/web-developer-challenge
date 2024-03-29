"use client"
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonPrimaryContainer } from "./buttonPrimaryStyled";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const ButtonPrimary = ({children, ...props}: ButtonPrimaryProps) => {
    return ( 
        <ButtonPrimaryContainer {...props}>
            {children}
        </ButtonPrimaryContainer>
     );
}
 
export default ButtonPrimary;