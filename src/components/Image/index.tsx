import tw from 'twin.macro'
import React from "react";

const ImageStyled = tw.img`
    rounded-[36px]
    object-fill
`;

const ImageComponent: React.FC<{ imageUri: string, imageAlt?: string }> = ({imageUri, imageAlt}) => {
    return <ImageStyled src={imageUri}  alt={imageAlt ?? "Image"} />
}

export default ImageComponent
