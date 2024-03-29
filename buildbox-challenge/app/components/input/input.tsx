"use client"
import { InputHTMLAttributes } from "react";
import { InputPrimary } from "./inputStyled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({...props}: InputProps) => {
    return <InputPrimary {...props}/>
}
 
export default Input;