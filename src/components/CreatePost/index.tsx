import React from 'react';
import { useForm } from 'react-hook-form';

import AddImageControl from '../AddImageControl';

import { AddImageContainer, Container } from './styles';

const CreatePost: React.FC = () => {
  const { control } = useForm();

  return (
    <Container>
      <AddImageContainer>
        <AddImageControl control={control} name="image" />
      </AddImageContainer>
    </Container>
  );
};

export default CreatePost;
