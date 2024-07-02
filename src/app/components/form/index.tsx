'use client';

import {
  Buttons,
  CancelButton,
  Container,
  ImageContainer,
  ImageIcon,
  ImageInput,
  Input,
  SubmitButton,
  Textarea,
  TrashButton,
  TrashIcon,
} from './styles';
import { useForm } from 'react-hook-form';
import { FieldValues } from './types';
import { usePost } from '@/hooks';

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<FieldValues>({ mode: 'onChange' });

  function handleCancelButtonClick() {
    reset();
  }

  const { createPost, creatingPost } = usePost({
    onCreatePost: () => reset(),
  });

  function onSubmit(data: FieldValues) {
    createPost(data);
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ImageContainer>
        <ImageInput>
          <ImageIcon />
        </ImageInput>
        <TrashButton>
          <TrashIcon />
        </TrashButton>
      </ImageContainer>
      <Input
        {...register('name', { required: true })}
        placeholder="Digite seu nome"
      />
      <Textarea
        {...register('message', { required: true })}
        placeholder="Mensagem"
      />

      <Buttons>
        <CancelButton onClick={handleCancelButtonClick}>Descartar</CancelButton>
        <SubmitButton disabled={!isValid || creatingPost} type="submit">
          {creatingPost ? 'Publicando...' : 'Publicar'}
        </SubmitButton>
      </Buttons>
    </Container>
  );
}
