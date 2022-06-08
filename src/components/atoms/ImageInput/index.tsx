import React, { useRef } from 'react';
import styled from 'styled-components';

type HTMLInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface ImageInputProps {
  onChange: HTMLInputType['onChange'];
  image?: string;
}

const Image = styled.input`
  border-radius: 36px;
`;

function ImageInput({ onChange, image }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <>
      <Image
        type="image"
        src={image}
        width="90px"
        height="90px"
        alt="Image Input"
        onClick={() => inputRef.current?.click()}
      />
      <input
        ref={inputRef}
        type="file"
        id="my_file"
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </>
  );
}

ImageInput.defaultProps = {
  image: '/logo.png'
};

export default ImageInput;
