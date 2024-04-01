import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

import * as S from './styles';

const DESCRIPTION_LIMIT = 2000;

const createPostSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  description: z
    .string()
    .min(1, 'A descrição é obrigatória.')
    .max(DESCRIPTION_LIMIT, 'Limite de 2000 caracteres.'),
  image: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length === 1, {
      message: 'Selecione uma imagem',
    })
    .transform((fileList) => fileList[0]),
});

type CreatePostData = z.infer<typeof createPostSchema>;

export function CreatePostForm() {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { isValid, errors, isDirty },
  } = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
  });

  function createPost(data: CreatePostData) {
    console.log(data);
  }

  return (
    <S.Form noValidate onSubmit={handleSubmit(createPost)}>
      <Controller
        control={control}
        name="image"
        render={({ field: { name, value, onChange } }) => (
          <S.UploadImageStyled
            name={name}
            value={(value as unknown as FileList)?.[0]}
            onChange={onChange}
          />
        )}
      />

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
        <Button variant="ghost" onClick={() => reset()} disabled={!isDirty}>
          Descartar
        </Button>

        <Button type="submit" disabled={!isValid}>
          Publicar
        </Button>
      </S.FooterContainer>
    </S.Form>
  );
}
