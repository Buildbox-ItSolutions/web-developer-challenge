import { ChangeEvent, useState } from 'react'

import { useAppDispatch } from '../../hooks'
import { publishPost } from '../../redux/postsSlice'

import * as S from './style'

const Form = () => {
  const dispatch = useAppDispatch()
  const [profileImage, setProfileImage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const desabledPublish = !(profileImage && name && message)

  const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (event: ProgressEvent<FileReader>) => {
        const url = event.target?.result as string
        setProfileImage(url)
      }
    
      reader.readAsDataURL(file)
    }
  }

  const clearForm = () => {
    setProfileImage('')
    setName('')
    setMessage('')
  }

  const publish = () => {
    dispatch(publishPost({ profileImage, name, message }))
    clearForm()
  }

  return (
    <S.Form>
      {profileImage ? (
        <>
          <S.ProfileImage src={profileImage} alt='bob' />
          <S.ImageDelete onClick={() => setProfileImage('')} />
        </>
      ) : (
        <S.ImageContainer htmlFor='image-input' data-testid='image-input'>
          <S.ImageInput
            data-testid='image-inputs'
            id='image-input'
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={(event) => imageUpload(event)}
          />
          <S.ImageIcon />
        </S.ImageContainer>
      )}
      <S.NameInput
        placeholder='Digite seu nome'
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <S.MessageInput
        placeholder='Mensagem'
        maxLength={800}
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <S.ButtonsContainer >
        <S.Discard onClick={clearForm}>Descartar</S.Discard>
        <S.Publish
          data-testid='publish-button'
          disabled={desabledPublish}
          onClick={publish}
        >
          Publicar
        </S.Publish>
      </S.ButtonsContainer>
    </S.Form>
  )
}

export default Form
