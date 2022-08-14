import { useForm } from 'react-hook-form'

import { Input, TextArea } from 'components/molecules'
import { Avatar, Button } from 'components/atoms'
import * as S from './styles'
import { usePost } from 'hooks'

type FormData = {
  name: string
  content: string
  picture: File[]
}

export const InputPost = () => {
  const { register, watch, handleSubmit, reset, setValue } = useForm<FormData>({
    defaultValues: { picture: [], content: '', name: '' }
  })
  const { setPosts } = usePost()

  const picFile = watch('picture')
  const pic = picFile?.length ? URL.createObjectURL(picFile[0]) : ''
  const resetForm = () => {
    setValue('picture', [])
    reset({ name: '', content: '' })
  }

  const handleSubmitForm = (data: FormData) => {
    const post = { ...data, id: Math.random(), picture: URL.createObjectURL(data.picture[0]) }
    setPosts((prevState) => [...prevState, post])
    resetForm()
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSubmitForm)}>
      <Avatar pic={pic} {...register('picture', { required: true })} />
      <Input fullWidth placeholder='Digite seu nome' {...register('name', { required: true })} />
      <TextArea fullWidth placeholder='Mensagem' {...register('content', { required: true })} />
      <S.Buttons>
        <Button variant='empty' onClick={resetForm}>
          Descartar
        </Button>
        <Button variant='full' type='submit'>
          Publicar
        </Button>
      </S.Buttons>
    </S.Container>
  )
}
