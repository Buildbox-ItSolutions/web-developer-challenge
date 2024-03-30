import { Controller, useForm } from 'react-hook-form'
import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../text-area'
import { UploadPhoto } from '../upload-photo'
import { Actions, Container, ErrorMessage } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../../services/posts/create-post'
import { toast } from 'react-hot-toast'
import { Post } from '../../@types/post'

const createPostSchema = z.object({
  content: z.string().min(10),
  thumbnail: z.string(),
  author: z.string().min(5),
})

type CreatePostValues = z.infer<typeof createPostSchema>

export function CreatePostForm() {
  const queryClient = useQueryClient()
  const { mutateAsync: handleCreateNewPost } = useMutation({
    mutationFn: createPost,
    onSuccess: (res) => {
      if (res) {
        toast.success('Post criado com sucesso')
        queryClient.setQueryData<Post[]>(['posts'], (data) => {
          if (data) {
            return [res, ...data]
          }
          return data
        })
        reset({
          author: '',
          content: '',
          thumbnail: '',
        })
      }
    },
    onError: (err) => {
      toast.success(err.message)
    },
  })

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostValues>({
    resolver: zodResolver(createPostSchema),
  })

  const { thumbnail, author, content } = watch()

  const isReadyToSubmit = author && content && thumbnail

  async function onSubmit(data: CreatePostValues) {
    await handleCreateNewPost(data)
  }

  function handleDiscardPost() {
    reset({
      author: '',
      content: '',
      thumbnail: '',
    })
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="thumbnail"
        render={({ field: { onChange } }) => {
          return (
            <>
              <UploadPhoto
                thumbnail={thumbnail}
                onThumbnailChanged={onChange}
              />
              <ErrorMessage>{errors.thumbnail?.message}</ErrorMessage>
            </>
          )
        }}
      />
      <Input placeholder="Digite o seu nome" {...register('author')} />
      <ErrorMessage>{errors.author?.message}</ErrorMessage>
      <TextArea placeholder="Mensagem" {...register('content')} />
      <ErrorMessage>{errors.content?.message}</ErrorMessage>

      <Actions>
        <Button
          variant="secondary"
          disabled={!isReadyToSubmit || isSubmitting}
          type="button"
          onClick={handleDiscardPost}
        >
          Cancelar
        </Button>
        <Button disabled={!isReadyToSubmit || isSubmitting} type="submit">
          Publicar
        </Button>
      </Actions>
    </Container>
  )
}
