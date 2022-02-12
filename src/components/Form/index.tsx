import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonGroup,
  InputMessage,
  InputName,
  StyledForm,
} from './styled';

import * as yup from 'yup';

import Button from '@/components/Button';
import Error from '@/components/Error';
import FileUploader from '@/components/FileUploader';

import type { Post, PostForm } from '@/types';

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
        (value: FileList) =>
          value.length === 0 ||
          value[0].type === 'image/jpeg' ||
          value[0].type === 'image/png' ||
          value[0].type === 'image/jpg',
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

  const onSubmit = handleSubmit((data) => {
    handleResetForm();
    handleAddPost({ id: uuid(), ...data });
  });

  const handleResetForm = () => reset();

  return (
    <StyledForm onSubmit={onSubmit}>
      <FileUploader
        errors={errors}
        control={control}
        resetField={resetField}
        register={register}
      />
      <InputName
        type="text"
        placeholder="Digite seu nome"
        error={!!errors.name}
        {...register('name')}
      />
      {errors.name && <Error as="span">{errors.name.message}</Error>}
      <InputMessage
        placeholder="Mensagem"
        error={!!errors.message}
        {...register('message')}
      />
      {errors.message && (
        <Error as="span">{errors.message.message}</Error>
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
