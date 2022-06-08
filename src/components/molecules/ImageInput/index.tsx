import Avatar from 'components/atoms/Avatar';
import { HTMLInputType } from 'components/atoms/Input';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { ThemeSpacing } from 'styles/theme';

export interface ImageInputProps {
  onChange: HTMLInputType['onChange'];
  image?: string;
  marginRight?: ThemeSpacing;
}

const Container = styled.div.attrs<{ marginRight: ThemeSpacing }>(
  ({ marginRight }) => ({
    marginRight: marginRight ?? '0'
  })
)<{ marginRight: ThemeSpacing }>`
  margin-right: ${props => props.theme.spacing[props.marginRight]};
`;

function ImageInput({ onChange, image, marginRight }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <Container marginRight={marginRight}>
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
    </Container>
  );
}

ImageInput.defaultProps = {
  image: '/avatar.png',
  marginRight: '0'
};

export default ImageInput;
