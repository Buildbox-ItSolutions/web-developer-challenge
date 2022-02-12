import React from 'react';
import { useForm } from 'react-hook-form';

import AddImageControl from '../AddImageControl';
import Input from '../Input';

import { AddImageContainer, AddNameContainer, Container } from './styles';

const CreatePost: React.FC = () => {
  const { control, register } = useForm();

  return (
    <Container>
      <AddImageContainer>
        <AddImageControl control={control} name="image" />
      </AddImageContainer>
      <AddNameContainer>
        <Input placeholder="Insira aqui o seu nome" {...register('nome')} />
      </AddNameContainer>
    </Container>
  );
};

export default CreatePost;
