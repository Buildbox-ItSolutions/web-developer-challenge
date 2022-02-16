import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useFeedService } from '../../hooks/useFeedService';

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

  const { postFeed } = useFeedService();

  const onClear = () => {
    reset({ name: '', message: '', image: undefined });
  };

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (values: any) => {
      const body: Feed = { ...values, ...(values.image || {}) };

      postFeed(body).then((data) => {
        onSuccessSubmit(data);
        onClear();
      });
    },
    [onSuccessSubmit, onClear, postFeed],
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <React.Fragment>
        <AddImageContainer>
          <AddImageControl
            control={control}
            name="image"
            rules={{
              required: {
                message: 'Deve-se conter uma foto',
                value: true,
              },
            }}
          />
        </AddImageContainer>
        <ErrorMessage errors={errors} name="image" />
      </React.Fragment>
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
          data-testid="name-input"
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
          data-testid="message-input"
        />
        <ErrorMessage errors={errors} name="message" />
      </AddMessageContainer>
      <BottomButtonsContainer>
        <ButtonsContainer>
          <ClearButton onClick={onClear} data-testid="clear-button">
            Descartar
          </ClearButton>
          <SubmitButton data-testid="submit-button">Publicar</SubmitButton>
        </ButtonsContainer>
      </BottomButtonsContainer>
    </Container>
  );
};

export default CreatePost;
