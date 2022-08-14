import { useForm } from 'react-hook-form'

import { Input, TextArea } from '@/components/molecules'
import { Avatar, Button } from '@/components/atoms'

import * as S from './styles'

type FormData = {
  name: string
  content: string
  picture: File[]
}

export const InputPost = () => {
  const { register, watch, handleSubmit, reset } = useForm<FormData>()

  const picFile = watch('picture')
  const pic = picFile ? URL.createObjectURL(picFile[0]) : ''

  const handleSubmitForm = (data: FormData) => {
    console.log(data)
  }
  const cleanForm = () => {
    reset({ name: '', content: '', picture: undefined })
  }

  return (
    <S.Container>
      <Avatar pic={pic} {...register('picture', { required: true })} />
      <Input fullWidth placeholder='Digite seu nome' {...register('name', { required: true })} />
      <TextArea fullWidth placeholder='Mensagem' {...register('content', { required: true })} />

      <S.Buttons>
        <Button variant='empty' onClick={cleanForm}>
          Descartar
        </Button>
        <Button variant='full' onClick={handleSubmit(handleSubmitForm)}>
          Publicar
        </Button>
      </S.Buttons>
    </S.Container>
  )
}
