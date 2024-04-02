import { ChangeEvent, ComponentProps, forwardRef } from 'react';

import uploadImageIcon from '../../../assets/icons/image-icon.svg';
import trashIcon from '../../../assets/icons/trash-icon.svg';

import * as S from './styles';

export type UploadImageProps = ComponentProps<'div'> & {
  name: string;
  value?: File;
  onChange?: (files: FileList | null) => void;
};

export const UploadImage = forwardRef<HTMLInputElement, UploadImageProps>(
  ({ name, value, onChange, ...props }, ref) => {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { files } = event.target;

      onChange?.(files);
    }

    const src = value && URL.createObjectURL(value);

    return (
      <S.UploadImageRoot {...props}>
        <S.UploadImageContainer htmlFor="upload">
          <S.ImgStyled
            $hasFileSelected={!!value}
            src={src || uploadImageIcon}
            alt={value ? value.name : 'Upload Icon'}
          />

          <S.InputStyled
            ref={ref}
            id="upload"
            type="file"
            accept="image/*"
            name={name}
            onChange={handleChange}
          />
        </S.UploadImageContainer>

        {!!value && (
          <S.RemoveButton type="button" onClick={() => onChange?.(null)}>
            <img src={trashIcon} alt="Remove" />
          </S.RemoveButton>
        )}
      </S.UploadImageRoot>
    );
  },
);

UploadImage.displayName = 'UploadImage';
