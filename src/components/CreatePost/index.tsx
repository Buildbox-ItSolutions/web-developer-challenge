import React from 'react';
import { useForm } from 'react-hook-form';
import { postFeed } from '../../services/feedServices';
import {
  ClearButton,
  Input,
  SubmitButton,
  TextArea,
} from '../../styles/SharedStyles';
import { Feed } from '../../types/feed';

import AddImageControl from '../AddImageControl';
import ErrorMessage from '../ErrorMessage';

import {
  AddImageContainer,
  AddMessageContainer,
  AddNameContainer,
  BottomButtonsContainer,
  ButtonsContainer,
  Container,
} from './styles';

type Props = {
  onSuccessSubmit: (value: Feed[]) => void;
};

const CreatePost: React.FC<Props> = ({ onSuccessSubmit }) => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onDescartar = () => {
    reset({ name: '', message: '', image: undefined });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) => {
    const body: Feed = { ...values };
    postFeed(body).then((feed) => {
      onSuccessSubmit(feed);
      onDescartar();
    });
  };

  return (
    <Container
      onSubmit={handleSubmit(onSubmit, (val) => {
        console.log(val);
      })}
    >
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
            required: {
              message: 'O nome deve ser informado',
              value: true,
            },
          })}
        />
        <ErrorMessage errors={errors} name="name" />
      </AddNameContainer>
      <AddMessageContainer>
        <TextArea
          placeholder="Mensagem"
          {...register('message', {
            min: {
              message: 'A descrição deve ser informada',
              value: 1,
            },
            required: {
              message: 'A descrição deve ser informada',
              value: true,
            },
          })}
        />
        <ErrorMessage errors={errors} name="message" />
      </AddMessageContainer>
      <BottomButtonsContainer>
        <ButtonsContainer>
          <ClearButton onClick={onDescartar}>Descartar</ClearButton>
          <SubmitButton>Publicar</SubmitButton>
        </ButtonsContainer>
      </BottomButtonsContainer>
    </Container>
  );
};

export default CreatePost;
