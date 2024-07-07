import { Controller, useForm } from 'react-hook-form'
import { Card } from '../../components/Card'
import FileInput from '../../components/Form/FileInput'
import { Header } from '../../components/Header'
import {
  ButtonsContainer,
  ContentContainer,
  HomeContainer,
  PostsContainer,
  PostsForm,
} from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from '../../components/Form/TextInput'
import TextAreaInput from '../../components/Form/TextAreaInput'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { Post } from './Post'
import { generateId } from '../../utils/generateId'

const formSchema = z.object({
  image: z.instanceof(File),
  name: z.string().min(1),
  message: z.string().min(1),
})

type formData = z.infer<typeof formSchema>

interface Post {
  id: string
  name: string
  message: string
  imageURl: string
}

export function Home() {
  const [buttonState, setButtonState] = useState(true)
  const [posts, setPosts] = useState<Post[]>([])
  const [resetFlag, setResetFlag] = useState(false)

  const {
    handleSubmit,
    control,
    register,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
  })

  function submit(data: formData) {
    if (data.image instanceof File) {
      handleCreatePost({
        id: generateId(),
        name: data.name,
        message: data.message,
        imageURl: URL.createObjectURL(data.image),
      })
    }
  }

  function resetForm() {
    reset()
    setButtonState(true)
    setResetFlag((prev) => !prev)
  }

  useEffect(() => {
    reset()
    setButtonState(true)
    setResetFlag((prev) => !prev)
  }, [isSubmitSuccessful, reset])

  useEffect(() => {
    watch((data) => {
      if (data.image !== undefined && data.name !== '' && data.message !== '') {
        setButtonState(false)
      }
    })
  }, [watch])

  // ----- Posts Logic -----

  function handleCreatePost(post: Post) {
    setPosts((state) => [...state, post])
  }

  function handleDeletePost(id: string) {
    setPosts((state) =>
      state.filter((item) => {
        if (item.id === id) {
          URL.revokeObjectURL(item.imageURl)
        }
        return item.id !== id
      }),
    )
  }

  return (
    <HomeContainer>
      <Header />
      <ContentContainer>
        <Card>
          <PostsForm onSubmit={handleSubmit(submit)}>
            <Controller
              control={control}
              name="image"
              render={({ field: { onBlur, name, onChange } }) => (
                <FileInput
                  onBlur={onBlur}
                  onChange={onChange}
                  name={name}
                  resetFlag={resetFlag}
                />
              )}
            />

            <div>
              <TextInput placeholder="Digite seu nome" {...register('name')} />

              <TextAreaInput
                placeholder="Mensagem"
                {...register('message')}
                rows={3}
              />
            </div>

            <ButtonsContainer>
              <Button variant="link" onClick={resetForm}>
                Descartar
              </Button>

              <Button variant="primary" type="submit" disabled={buttonState}>
                Publicar
              </Button>
            </ButtonsContainer>
          </PostsForm>
        </Card>

        <PostsContainer>
          <h2>Feed</h2>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                name={post.name}
                imageURl={post.imageURl}
                message={post.message}
                handleDelete={handleDeletePost}
              />
            )
          })}
        </PostsContainer>
      </ContentContainer>
    </HomeContainer>
  )
}
