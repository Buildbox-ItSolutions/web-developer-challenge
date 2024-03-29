"use client"

import Image, { ImageProps } from "next/image";
import { AvatarContainer } from "./avatarStyled";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Avatar = ({children}: AvatarProps) => {
    return (
        <AvatarContainer>
            {children}
        </AvatarContainer>
    )
   
}
 
export default Avatar;