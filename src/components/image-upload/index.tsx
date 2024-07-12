import { ChangeEvent, useRef, useState } from "react";

export type ImageInputProps = {
    Img: string;
    HandleChangeImage: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function ImageInput(props: ImageInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.click();
    }

    return (
        <span>
            <input
                ref={inputRef}
                type="file"
                onChange={props.HandleChangeImage}
                style={{ display: "none" }}
            />
            <img src={props.Img} onClick={handleClick} />
        </span>
    )
}