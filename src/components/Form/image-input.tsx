import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import ImageIcon from "../icons/image-icon";

export const BoxStyled = styled.label`
  position: relative;
  align-self: center;
  box-sizing: border-box;

  width: 88px;
  height: 88px;

  margin-bottom: 8px;
  border-radius: 36px;
  border: solid 1px var(--greyish-brown-three);

  background-color: rgba(75, 75, 75, 0);

  input {
    display: none;
  }
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
  }
`;

export default function ImageInput() {
  const [image, setImage] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  if (image === "") {
    return (
      <BoxStyled>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <ImageIcon />
      </BoxStyled>
    );
  } else {
    return (
      <BoxStyled>
        <Image
          alt="avatar"
          src={image}
          fill
          priority
          sizes="max-inline-size: 100%"
        />
      </BoxStyled>
    );
  }
}
