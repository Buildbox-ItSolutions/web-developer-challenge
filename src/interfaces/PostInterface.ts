import { ReactNode } from "react";

export interface PostInterface {
    index?:number,
    img: string,
    name: string,
    content: string,
}
export interface PostPropsInterface extends PostInterface {
    children?: ReactNode
    className?: string
}