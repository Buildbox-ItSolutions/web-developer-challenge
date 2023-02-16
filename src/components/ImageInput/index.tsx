import { ChangeEvent } from 'react';

import { IPreviewImage } from '../../models/IPreviewImage';
import imageIcon from '../../assets/icons/image.svg';

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
            <img src={imageIcon} className="icon" alt="Adicionar imagem" />
          ) : (
              <img src={getPreviewImage.url} className="user-image" alt="Imagem do usuário" />
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
