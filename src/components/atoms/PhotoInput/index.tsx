import React from 'react';

import { PhotoInputProps } from 'models/PhotoInputProps';

import { StyledPhotoInput } from './styles';

import inputImageIcon from '../../../assets/icons/image.svg';

const PhotoInput: React.FC<PhotoInputProps> = ({
  onChange,
  getPreviewImage,
  ...props
}) => {
  return (
    <StyledPhotoInput>
      <label htmlFor="image">
        {
          !getPreviewImage ? (
            <img src={inputImageIcon} className="icon" alt="Adicionar foto" />
          ) : (
              <img src={getPreviewImage.url} alt="Foto do usuário" /> // eslint-disable-line
            ) // eslint-disable-line
        }
      </label>
      <input
        type="file"
        id="image"
        accept=".png, .jpg, .jpeg"
        onChange={onChange}
        {...props}
      />
    </StyledPhotoInput>
  );
};

export default PhotoInput;
