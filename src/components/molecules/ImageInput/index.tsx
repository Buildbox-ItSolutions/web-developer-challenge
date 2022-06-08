import Avatar from 'components/atoms/Avatar';
import React, { useRef } from 'react';

type HTMLInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface ImageInputProps {
  onChange: HTMLInputType['onChange'];
  image?: string;
}

function ImageInput({ onChange, image }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <>
      <Avatar
        src={image}
        width="90px"
        height="90px"
        alt="Image Input"
        cursor="pointer"
        onClick={() => inputRef.current?.click()}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/gif, image/jpeg"
        id="my_file"
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </>
  );
}

ImageInput.defaultProps = {
  image: '/avatar.png'
};

export default ImageInput;
