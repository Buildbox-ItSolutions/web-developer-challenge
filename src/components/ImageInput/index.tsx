import { ChangeEvent } from 'react';
import { IPreviewImage } from '../../@types/IPreviewImage';

import imageIcon from '../../assets/images/image.svg';

import { StyledImageInput } from './styles';

interface ImageInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  getPreviewImage?: IPreviewImage | undefined;
}

export function ImageInput({ onChange, getPreviewImage, ...props }: ImageInputProps) {
  return (
    <StyledImageInput>
      <label htmlFor="image">
        {
          !getPreviewImage ? (
            <img src={imageIcon} className="icon" alt="Adicionar foto" />
          ) : (
              <img src={getPreviewImage.url} alt="Foto do usuário" />
            )
        }
      </label>
      <input
        type="file"
        id="image"
        accept=".png, .jpg, .jpeg"
        onChange={onChange}
        {...props}
      />
    </StyledImageInput>
  );
};
