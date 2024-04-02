import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ImageIcon from "../icons/image-icon";
import TrashIcon from "../icons/trash-icon";

interface BoxProps {
  $variant?: "image" | "input" | "input-img";
}

export const BoxStyled = styled.label<BoxProps>`
  position: relative;
  align-self: center;
  box-sizing: border-box;

  width: 88px;
  height: 88px;

  margin-bottom: 8px;
  border-radius: 36px;
  border: solid 1px var(--greyish-brown-three);

  background-color: rgba(75, 75, 75, 0);

  ${(props) => {
    if (props.$variant === "image") {
      return `
        img {
          object-fit: cover;
          border-radius: 36px;
        }
        svg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }`;
    } else if (props.$variant === "input") {
      return `
      cursor: pointer;
        input {
          display: none;
        }
        svg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        `;
    } else if (props.$variant === "input-img") {
      return `
        img {
          object-fit: cover;
          border-radius: 36px;
        }
        svg {
          position: absolute;
          cursor: pointer;
          top: 0;
          bottom: 0;
          right: -30px;
          margin: auto;
        }
        `;
    }
  }}
`;

interface ImageInputProps {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

export default function ImageInput({ image, setImage }: ImageInputProps) {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClick = () => setImage("");

  if (image === "") {
    return (
      <BoxStyled $variant="input">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <ImageIcon />
      </BoxStyled>
    );
  } else {
    return (
      <BoxStyled $variant="input-img">
        <Image
          alt="avatar"
          src={image}
          fill
          priority
          sizes="max-inline-size: 100%"
        />
        <TrashIcon onClick={handleClick} />
      </BoxStyled>
    );
  }
}
