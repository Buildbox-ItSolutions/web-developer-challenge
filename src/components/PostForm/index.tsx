import * as S from './style'
import { useForm } from 'react-hook-form'
import { postSchema } from '../../schema/postSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ImageIcon } from '../Icons/ImageIcon'
import { useContext, useRef, useState } from 'react'
import { TrashCan } from '../Icons/TrashCan'
import { PostsContext } from '../../contexts/PostsContext'

export type PostSchema = z.infer<typeof postSchema>

export const PostForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<PostSchema>({ resolver: zodResolver(postSchema) })

  const { posts, setPosts } = useContext(PostsContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState('')
  const [, setFile] = useState<File | null>(null)

  const handleImageClick = () => {
    inputRef.current?.click()
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files![0]
    setFile(uploadedFile)

    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }

    reader.readAsDataURL(uploadedFile)
  }

  const handleDiscardPhoto = () => {
    setImage('')
    setFile(null)
  }

  const onSubmit = async (data: PostSchema) => {
    try {
      reset()
      handleDiscardPhoto()
      setPosts([...posts, { postData: data, image }])
    } catch (error) {
      console.log(error)
    } finally {
      localStorage.setItem(
        'posts',
        JSON.stringify([...posts, { postData: data, image }]),
      )
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.PhotoWrapper>
        {image ? (
          <>
            <S.UploadedImage src={image} alt="teste" />
            <TrashCan onClick={handleDiscardPhoto} />
          </>
        ) : (
          <S.PhotoUpload onClick={handleImageClick}>
            <S.Input type="file" ref={inputRef} onChange={handleImageChange} />
            <ImageIcon />
          </S.PhotoUpload>
        )}
      </S.PhotoWrapper>
      <S.InputsField>
        <S.Input
          type="text"
          {...register('name')}
          placeholder="Digite seu nome"
        />
        <S.TextArea {...register('message')} placeholder="Mensagem" rows={3} />
      </S.InputsField>
      <S.ButtonWrapper>
        <S.Button type="button" onClick={() => reset()}>
          Descartar
        </S.Button>
        <S.Button type="submit" disabled={!isValid}>
          Publicar
        </S.Button>
      </S.ButtonWrapper>
    </S.Form>
  )
}
