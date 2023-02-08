import React, { useRef, useState } from 'react'

/* styles */
import * as S from './style'

/* icons */
import { RxImage } from 'react-icons/rx'

/* components */
import PostContainer from '../PostContainer'
import Input from '../Input'
import InputTextArea from '../InputTextArea'
import Button from '../Button'

const AddPost = (): React.ReactElement => {
  /* ref */
  const inputUploadImage = useRef<HTMLInputElement>(null)

  const [photoOfPost, setPhotoOfPost] = useState<string | null>(null)

  const openWindowToSelectImage = () => {
    inputUploadImage?.current?.click()
  }

  const selectToImage = () => {
    if (inputUploadImage.current?.files?.length) {
      const profileLoad = window.URL.createObjectURL(
        inputUploadImage?.current?.files[0]
      )
      setPhotoOfPost(profileLoad)
    }
  }

  return (
    <PostContainer>
      <S.PostAreaAddFigure>
        <S.PostAreaSelectFigure onClick={openWindowToSelectImage}>
          {photoOfPost ? (
            <S.PostAreaImage src={photoOfPost} />
          ) : (
            <RxImage size={24} />
          )}
        </S.PostAreaSelectFigure>
        <S.InputFile
          type="file"
          ref={inputUploadImage}
          onChange={selectToImage}
        />
        <S.PostAreaInputs>
          <S.PostAreaInput>
            <Input placeholder="Digite seu nome" />
          </S.PostAreaInput>
          <S.PostAreaInput>
            <InputTextArea placeholder="Mensagem" />
          </S.PostAreaInput>
        </S.PostAreaInputs>
        <S.PostAreaButton>
          <Button label="Descartar" isLink />
          <Button label="Publicar" isEnable={false} />
        </S.PostAreaButton>
      </S.PostAreaAddFigure>
    </PostContainer>
  )
}

export default AddPost
