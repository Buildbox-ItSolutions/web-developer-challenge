"use client"
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonSecondaryContainer } from "./buttonSecondaryStyled";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const ButtonSecondary = ({children, ...props}: ButtonSecondaryProps) => {
    return ( 
        <ButtonSecondaryContainer {...props}>
            {children}
        </ButtonSecondaryContainer>
     );
}
 
export default ButtonSecondary;