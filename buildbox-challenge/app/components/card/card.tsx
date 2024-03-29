import { HtmlHTMLAttributes, ReactNode } from "react";
import { CardContainer } from "./cardStyled";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Card = ({children, ...props}: CardProps) => {
    return ( 
        <CardContainer>
            {children}
        </CardContainer>
     );
}
 
export default Card;