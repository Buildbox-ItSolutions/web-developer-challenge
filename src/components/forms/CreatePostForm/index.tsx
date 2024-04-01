import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '../../common/Input';

import * as S from './styles';

const DESCRIPTION_LIMIT = 2000;

const createPostSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  description: z
    .string()
    .min(1, 'A descrição é obrigatória.')
    .max(DESCRIPTION_LIMIT, 'Limite de 2000 caracteres.'),
  image: z.string().url(),
});

type CreatePostData = z.infer<typeof createPostSchema>;

export function CreatePostForm() {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
  });

  function createPost(data: CreatePostData) {
    console.log(data);
  }

  return (
    <S.Form noValidate onSubmit={handleSubmit(createPost)}>
      <S.UploadImageStyled />

      <div className="inputs-group">
        <Input
          type="text"
          placeholder="Digite seu nome"
          errorFeedback={errors.name?.message}
          {...register('name')}
        />

        <Input
          as="textarea"
          placeholder="Mensagem"
          max={DESCRIPTION_LIMIT}
          errorFeedback={errors.description?.message}
          {...register('description')}
        />
      </div>

      <S.FooterContainer>
        <button type="button">Descartar</button>

        <button type="submit" disabled={!isValid}>
          Publicar
        </button>
      </S.FooterContainer>
    </S.Form>
  );
}
