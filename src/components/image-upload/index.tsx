import { ChangeEvent, useRef, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";

export type ImageInputProps = {
    Img: string;
    HandleChangeImage: (e: ChangeEvent<HTMLInputElement>) => void
}

const ImageInputDiv = styled.div`
    width: 16vh;
    height: 16vh;
    margin: 2vh 0 2vh 0vh;
    border-radius: 20px;
    border: 1px solid #4B4B4B;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
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
        <ImageInputDiv onClick={handleClick} >
            <input
                ref={inputRef}
                type="file"
                onChange={props.HandleChangeImage}
                style={{ display: "none" }}
            />
            {props.Img
                ? <Image src={props.Img} alt="Imagem do Post" />
                : <IoImageOutline color="#9F9F9F" />}
        </ImageInputDiv>
    )
}