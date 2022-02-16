import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import type { Post, PostForm } from '@/types';
import {
  ButtonGroup,
  FileUploadContainer,
  ImageButton,
  ImageContainer,
  InputMessage,
  InputName,
  StyledForm,
  TrashButton,
} from './styled';
import Button from '@/components/Button';
import Error from '@/components/Error';
import Avatar from '@/components/Avatar';

import { ReactComponent as TrashIcon } from '@/assets/trash.svg';
import { ReactComponent as FileUploadIcon } from '@/assets/file-upload-icon.svg';

import { useDisplayImage } from '@/hooks';
import { SUPPORTED_IMG_TYPES, validateIMGSupportedTypes } from '@/utils/validators';

type Props = {
  handleAddPost: (post: Post) => void;
};

const schema = yup
  .object({
    avatar: yup
      .mixed()
      .test(
        'fileType',
        'Apenas suportamos PNG/JPG.',
        (value: FileList | undefined) => !value || !value[0] || validateIMGSupportedTypes(value),
      ),
    name: yup.string().required('Informe seu nome'),
    message: yup.string().required('Deve escrever uma mensagem'),
  })
  .required();

export default function Form({ handleAddPost }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    resetField,
  } = useForm<PostForm>({
    resolver: yupResolver(schema),
  });

  const [avatar, name] = useWatch({
    control,
    name: ['avatar', 'name'],
  });

  const avatarInputRef = React.useRef<HTMLInputElement | null>();

  const [avatarImg, uploader, setAvatarImg] = useDisplayImage();

  const onSubmit = handleSubmit(({ name, message }) => {
    handleResetForm();
    handleAddPost({ id: uuid(), name, message, avatar: avatarImg });
  });

  const { ref: avatarReactHookFormRef, onChange, ...avatarFieldProps } = register('avatar');

  const handleClickFileInput = () => avatarInputRef.current?.click();

  const handleRemoveDisplayAvatar = () => {
    setAvatarImg(undefined);
    resetField('avatar');
  };

  const handleResetForm = () => {
    handleRemoveDisplayAvatar();
    reset();
  };

  return (
    <StyledForm name="post" onSubmit={onSubmit}>
      {avatar && avatar.length !== 0 && validateIMGSupportedTypes(avatar) ? (
        <>
          <ImageContainer>
            <Avatar src={avatarImg} alt={`${name} Avatar`} />
            <TrashButton
              type="reset"
              aria-label="Remove Avatar Image"
              onClick={handleRemoveDisplayAvatar}
              variant="icon"
            >
              <TrashIcon />
            </TrashButton>
          </ImageContainer>
        </>
      ) : (
        <>
          <FileUploadContainer error={!!errors.avatar}>
            <input
              type="file"
              hidden
              accept={SUPPORTED_IMG_TYPES.join(', ')}
              aria-invalid={errors.avatar ? 'true' : 'false'}
              aria-label="Upload Avatar Image"
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
            <ImageButton variant="outlined" aria-label="Upload Image" onClick={handleClickFileInput} type="button">
              <FileUploadIcon />
            </ImageButton>
          </FileUploadContainer>
          {errors.avatar && (
            <Error alignSelf="center" role="alert">
              {errors.avatar.message}
            </Error>
          )}
        </>
      )}
      <InputName
        id="name"
        type="text"
        placeholder="Digite seu nome"
        aria-label="name"
        aria-invalid={errors.name ? 'true' : 'false'}
        error={!!errors.name}
        {...register('name')}
      />
      {errors.name && (
        <Error as="span" role="alert">
          {errors.name.message}
        </Error>
      )}
      <InputMessage
        id="message"
        placeholder="Mensagem"
        aria-label="message"
        aria-invalid={errors.message ? 'true' : 'false'}
        error={!!errors.message}
        {...register('message')}
      />
      {errors.message && (
        <Error as="span" role="alert">
          {errors.message.message}
        </Error>
      )}
      <ButtonGroup>
        <Button variant="outlined" onClick={handleResetForm}>
          Descartar
        </Button>
        <Button>Publicar</Button>
      </ButtonGroup>
    </StyledForm>
  );
}
