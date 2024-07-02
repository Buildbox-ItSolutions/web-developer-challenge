'use client';

import { Archivo_Black } from 'next/font/google';
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
import { useState } from 'react';

const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'] });

export function Form() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleCancelButtonClick() {
    setName('');
    setMessage('');
  }

  const disabled = !name || !message;

  return (
    <Container>
      <ImageContainer>
        <ImageInput>
          <ImageIcon />
        </ImageInput>
        <TrashButton>
          <TrashIcon />
        </TrashButton>
      </ImageContainer>
      <Input
        name="name"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        name="message"
        placeholder="Mensagem"
        onChange={(e) => setMessage(e.target.value)}
      />

      <Buttons>
        <CancelButton onClick={handleCancelButtonClick}>Descartar</CancelButton>
        <SubmitButton disabled={disabled} type="submit">
          Publicar
        </SubmitButton>
      </Buttons>
    </Container>
  );
}
