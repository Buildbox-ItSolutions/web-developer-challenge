import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../../styles/SharedStyles';

import AddImageControl from '../AddImageControl';

import {
  AddImageContainer,
  AddMessageContainer,
  AddNameContainer,
  Container,
} from './styles';

const CreatePost: React.FC = () => {
  const { control, register, reset } = useForm();

  const onDescartar = () => {
    reset({ name: '', message: '', image: undefined });
  };

  return (
    <Container>
      <AddImageContainer>
        <AddImageControl control={control} name="image" />
      </AddImageContainer>
      <AddNameContainer>
        <Input
          placeholder="Digite seu nome"
          {...register('name', {
            min: {
              message: 'O nome deve ser informado',
              value: 1,
            },
          })}
        />
      </AddNameContainer>
      <AddMessageContainer>
        <TextArea
          placeholder="Mensagem"
          {...register('message', {
            min: {
              message: 'A descrição deve ser informada',
              value: 1,
            },
          })}
        />
      </AddMessageContainer>
      <div>
        <button type="button" onClick={onDescartar}>
          Descartar
        </button>
        <button type="submit">Publicar</button>
      </div>
    </Container>
  );
};

export default CreatePost;
