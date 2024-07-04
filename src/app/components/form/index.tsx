'use client';

import {
  Buttons,
  CancelButton,
  Container,
  ImageContainer,
  ImageIcon,
  ImageInput,
  Input,
  RealImageInput,
  SubmitButton,
  Textarea,
  TrashButton,
  TrashIcon,
} from './styles';
import { useForm } from 'react-hook-form';
import { FieldValues } from './types';
import { usePost } from '@/hooks';
import { useEffect, useRef } from 'react';

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
    setValue,
    resetField,
    watch,
    trigger,
  } = useForm<FieldValues>({ mode: 'onChange' });

  const imageURL = watch('imageURL');

  function handleCancelButtonClick() {
    reset();
  }

  const { createPost, creatingPost } = usePost({
    onCreatePost: () => reset(),
  });

  function onSubmit(data: FieldValues) {
    createPost(data);
  }

  useEffect(() => {
    register('imageURL', { required: true });
  }, []);

  useEffect(() => {
    if (imageURL) {
      const imageInput = imageInputRef.current;
      if (!imageInput) return;

      imageInput.style.backgroundImage = `url(${imageURL})`;
    } else {
      const imageInput = imageInputRef.current;
      if (!imageInput) return;

      imageInput.style.backgroundImage = 'none';
    }
  }, [imageURL]);

  const imageInputRef = useRef<HTMLLabelElement>(null);

  function handleImageSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      if (!event.target) return;
      if (!imageInputRef.current?.style) return;

      const imageURL = event.target.result?.toString();

      if (imageURL) setValue('imageURL', imageURL);
      else resetField('imageURL');

      trigger('imageURL');
    };

    reader.readAsDataURL(selectedFile);
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ImageContainer>
        <RealImageInput onChange={handleImageSelected} />
        <ImageInput ref={imageInputRef}>
          {!imageURL && <ImageIcon />}
        </ImageInput>
        {!!imageURL && (
          <TrashButton onClick={() => resetField('imageURL')}>
            <TrashIcon />
          </TrashButton>
        )}
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
