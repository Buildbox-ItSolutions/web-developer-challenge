import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

export type ImageInputProps = {
    Img: string;
    HandleChangeImage: (e: ChangeEvent<HTMLInputElement>) => void
}

const ImageInputDiv = styled.div`
    margin: 2vh 0 2vh 0vh;
`

const Image = styled.img`
    width: 16vh;
    height: 16vh;

    border-radius: 20px;
    border: 1px solid #4B4B4B;

    object-fit: cover;
`;

export default function ImageInput(props: ImageInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.click();
    }

    return (
        <ImageInputDiv>
            <input
                ref={inputRef}
                type="file"
                onChange={props.HandleChangeImage}
                style={{ display: "none" }}
            />
            <Image src={props.Img} onClick={handleClick} />
        </ImageInputDiv>
    )
}