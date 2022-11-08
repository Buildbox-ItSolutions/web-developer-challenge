import { ChangeEvent } from "react";

export interface InputsProps{
    file?:string;
    texto?:string;
    placeholder?:string;
    handleFile?: (e: ChangeEvent<HTMLInputElement>) => void ;
}

