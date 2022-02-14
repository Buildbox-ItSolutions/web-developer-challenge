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
        (value: FileList | undefined) =>
          !value ||
          !value[0] ||
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
    <StyledForm name="post" onSubmit={onSubmit}>
      <FileUploader
        errors={errors}
        control={control}
        resetField={resetField}
        register={register}
      />
      <InputName
        id="name"
        type="text"
        placeholder="Digite seu nome"
        aria-label="name"
        aria-invalid={errors.name ? 'true' : 'false'}
        error={!!errors.name}
        {...register('name')}
      />
      {errors.name && (
        <Error as="span" role="alert">
          {errors.name.message}
        </Error>
      )}
      <InputMessage
        id="message"
        placeholder="Mensagem"
        aria-label="message"
        aria-invalid={errors.message ? 'true' : 'false'}
        error={!!errors.message}
        {...register('message')}
      />
      {errors.message && (
        <Error as="span" role="alert">
          {errors.message.message}
        </Error>
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
