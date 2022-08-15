import tw from 'twin.macro'
import React from "react";

const TitleStyled = tw.h1`
    text-green-500
    font-extrabold
    text-3xl
    text-green-200
    text-center
    antialiased
`;

const CaptionStyled = tw.h3`
    uppercase
    text-black-800
    font-light
    text-base
    text-center
    antialiased
`;

const Title: React.FC<{
    title: string,
    caption: string
}> = ({ caption, title }) => {
    return <div>
        <TitleStyled>{title}</TitleStyled>
        <CaptionStyled>{caption}</CaptionStyled>
    </div>
}

export default Title;