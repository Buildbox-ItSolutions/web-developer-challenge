import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { useCreatePost } from '../../../hooks/controllers/useCreatePost';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

import * as S from './styles';

const MESSAGE_LIMIT = 2000;

const createPostSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  message: z
    .string()
    .min(1, 'A mensagem é obrigatória.')
    .max(MESSAGE_LIMIT, 'Limite de 2000 caracteres.'),
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

  const { createPost, isCreatingPost } = useCreatePost();

  const handleCreatePost = handleSubmit((data) =>
    createPost({ ...data, imageURL: URL.createObjectURL(data.image) }),
  );

  return (
    <S.Form noValidate onSubmit={handleCreatePost}>
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
          max={MESSAGE_LIMIT}
          errorFeedback={errors.message?.message}
          {...register('message')}
        />
      </div>

      <S.FooterContainer>
        <Button variant="ghost" onClick={() => reset()} disabled={!isDirty}>
          Descartar
        </Button>

        <Button type="submit" disabled={!isValid} isLoading={isCreatingPost}>
          Publicar
        </Button>
      </S.FooterContainer>
    </S.Form>
  );
}
