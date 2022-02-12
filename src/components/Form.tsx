import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled, { useTheme } from 'styled-components';

import FileUploadIcon from '@/assets/file-upload-icon.svg?component';

import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Text from '@/components/Text';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.black['500']};
  max-width: 516px;
  min-height: 353px;
  border: 1px solid ${({ theme }) => theme.black['300']};
`;

const AvatarContainer = styled.div`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.black['200']};
  transition: border-color 200ms ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ImageButton = styled(Button)`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const InputName = styled(Input)`
  margin-bottom: 8px;
`;

const InputMessage = styled(TextArea)`
  resize: vertical;
  margin-bottom: 8px;
  min-height: 80px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-self: end;
`;

const Error = styled(Text)`
  /* padding: 0 16px; */
  font-size: 12px;
  margin-bottom: 8px;
  align-self: flex-start;
`;

type FormData = {
  avatar: File;
  name: string;
  message: string;
};

const schema = yup
  .object({
    avatar: yup.mixed().optional(),
    name: yup.string().required('Informe seu nome'),
    message: yup.string().required('Deve escrever uma mensagem'),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const theme = useTheme();

  const onSubmit = handleSubmit((data) => console.log(data));

  const avatarInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickFileInput = () => avatarInputRef.current?.click();

  //  TODO: need to integrate with reducer

  return (
    <StyledForm onSubmit={onSubmit}>
      <AvatarContainer>
        <ImageButton
          variant="outlined"
          onClick={handleClickFileInput}
          type="button"
        >
          <input
            type="file"
            hidden
            accept="image/png, image/jpeg"
            {...register('avatar')}
            ref={avatarInputRef}
          />
          <FileUploadIcon />
        </ImageButton>
      </AvatarContainer>
      <InputName
        type="text"
        placeholder="Digite seu nome"
        error={!!errors.name}
        {...register('name')}
      />
      {errors.name && (
        <Error as="span" color={theme.error}>
          {errors.name.message}
        </Error>
      )}
      <InputMessage
        placeholder="Mensagem"
        error={!!errors.message}
        {...register('message')}
      />
      {errors.message && (
        <Error as="span" color={theme.error}>
          {errors.message.message}
        </Error>
      )}
      <ButtonGroup>
        <Button variant="outlined">Descartar</Button>
        <Button>Publicar</Button>
      </ButtonGroup>
    </StyledForm>
  );
}
