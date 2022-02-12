import * as React from 'react';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  useWatch,
} from 'react-hook-form';

import {
  FileUploadContainer,
  FileUploadIcon,
  ImageContainer,
  ImageButton,
  TrashButton,
} from './styled';

import type { PostForm } from '@/types';
import { useDisplayImage } from '@/hooks';
import {
  SUPPORTED_IMG_TYPES,
  validateIMGSupportedTypes,
} from '@/utils/validators';

import { ReactComponent as TrashIcon } from '@/assets/trash.svg';
import Error from '@/components/Error';
import Avatar from '@/components/Avatar';

type Props = {
  errors: FieldErrors<PostForm>;
  register: UseFormRegister<PostForm>;
  resetField: UseFormResetField<PostForm>;
  control: Control<PostForm>;
};

export default function FileUploader({
  errors,
  register,
  resetField,
  control,
}: Props) {
  const avatarInputRef = React.useRef<HTMLInputElement | null>(null);

  const [img, uploader] = useDisplayImage();

  const {
    ref: avatarReactHookFormRef,
    onChange,
    ...avatarFieldProps
  } = register('avatar');

  const [image, name] = useWatch({
    control,
    name: ['avatar', 'name'],
  });

  const handleClickFileInput = () => avatarInputRef.current?.click();

  const handleRemoveDisplayAvatar = () => resetField('avatar');

  return (
    <>
      {image &&
      image.length !== 0 &&
      validateIMGSupportedTypes(image) ? (
        <ImageContainer>
          <Avatar src={img} alt={`${name} Avatar`} />
          <TrashButton
            onClick={handleRemoveDisplayAvatar}
            variant="icon"
          >
            <TrashIcon />
          </TrashButton>
        </ImageContainer>
      ) : (
        <>
          <FileUploadContainer error={!!errors.avatar}>
            <ImageButton
              variant="outlined"
              onClick={handleClickFileInput}
              type="button"
            >
              <input
                type="file"
                hidden
                accept={SUPPORTED_IMG_TYPES.join(', ')}
                ref={(instance) => {
                  avatarReactHookFormRef(instance);
                  avatarInputRef.current = instance;
                }}
                onChange={(e) => {
                  onChange(e);
                  uploader(e);
                }}
                {...avatarFieldProps}
              />
              <FileUploadIcon error={!!errors.avatar} />
            </ImageButton>
          </FileUploadContainer>
          {errors.avatar && (
            <Error alignSelf="center">{errors.avatar.message}</Error>
          )}
        </>
      )}
    </>
  );
}
