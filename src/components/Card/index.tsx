import { ReactNode } from "react";
import { CardS } from "./style";

interface IProps {

    children: ReactNode
}

export default function Card({children}:IProps){

    return(
        <CardS>
            {children}
        </CardS>
    )
}