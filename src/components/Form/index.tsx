import { v4 as uuid } from 'uuid';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'styled-components';
import {
  AvatarContainer,
  ButtonGroup,
  Error,
  ImageButton,
  InputMessage,
  InputName,
  StyledForm,
} from './styled';

import * as yup from 'yup';

import Button from '@/components/Button';
import FileUploadIcon from '@/assets/file-upload-icon.svg?component';
import { Post } from '@/types';

type Props = {
  handleAddPost: (post: Post) => void;
};

const schema = yup
  .object({
    avatar: yup.mixed().optional(),
    name: yup.string().required('Informe seu nome'),
    message: yup.string().required('Deve escrever uma mensagem'),
  })
  .required();

export default function Form({ handleAddPost }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Post, 'id'>>({
    resolver: yupResolver(schema),
  });

  const theme = useTheme();

  const onSubmit = handleSubmit((data) =>
    handleAddPost({ id: uuid(), ...data }),
  );

  const avatarInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickFileInput = () => avatarInputRef.current?.click();

  //  TODO: need to integrate with reducer

  return (
    <StyledForm onSubmit={onSubmit}>
      <AvatarContainer>
        <ImageButton
          variant="outlined"
          onClick={handleClickFileInput}
          type="button"
        >
          <input
            type="file"
            hidden
            accept="image/png, image/jpeg"
            {...register('avatar')}
            ref={avatarInputRef}
          />
          <FileUploadIcon />
        </ImageButton>
      </AvatarContainer>
      <InputName
        type="text"
        placeholder="Digite seu nome"
        error={!!errors.name}
        {...register('name')}
      />
      {errors.name && (
        <Error as="span" color={theme.error}>
          {errors.name.message}
        </Error>
      )}
      <InputMessage
        placeholder="Mensagem"
        error={!!errors.message}
        {...register('message')}
      />
      {errors.message && (
        <Error as="span" color={theme.error}>
          {errors.message.message}
        </Error>
      )}
      <ButtonGroup>
        <Button variant="outlined">Descartar</Button>
        <Button>Publicar</Button>
      </ButtonGroup>
    </StyledForm>
  );
}
