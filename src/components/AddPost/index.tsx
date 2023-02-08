import React, { useRef, useState } from 'react'

/* styles */
import * as S from './style'

/* icons */
import { RxImage } from 'react-icons/rx'
import { BiTrashAlt } from 'react-icons/bi'

/* components */
import PostContainer from '../PostContainer'
import Input from '../Input'
import InputTextArea from '../InputTextArea'
import Button from '../Button'

type Post = {
  figureOfPost: string | null
  nameOfPost: string
  messageOfPost: string
}

const AddPost = (): React.ReactElement => {
  /* ref */
  const inputUploadImage = useRef<HTMLInputElement>(null)

  const [figureOfPost, setFigureOfPost] = useState<string | null>(null)
  const [nameOfPost, setNameOfPost] = useState('')
  const [messageOfPost, setMessageOfPost] = useState('')

  const [postsSaved, setPostsSaved] = useState<Array<Post>>([])

  const openWindowToSelectImage = () => {
    inputUploadImage?.current?.click()
  }

  const selectToImage = () => {
    if (inputUploadImage.current?.files?.length) {
      const profileLoad = window.URL.createObjectURL(
        inputUploadImage?.current?.files[0]
      )
      setFigureOfPost(profileLoad)
    }
  }

  const removeFigure = () => {
    setFigureOfPost(null)
  }

  const clearedPost = () => {
    setFigureOfPost(null)
    setNameOfPost('')
    setMessageOfPost('')
  }

  const savedPost = () => {
    setPostsSaved([...postsSaved, { figureOfPost, nameOfPost, messageOfPost }])
    clearedPost()
  }

  console.log(postsSaved)

  return (
    <PostContainer>
      <S.PostAreaAddPost>
        <S.PostAreaAddFigure>
          <S.PostAreaSelectFigure onClick={openWindowToSelectImage}>
            {figureOfPost ? (
              <S.PostAreaImage src={figureOfPost} />
            ) : (
              <RxImage size={24} />
            )}
          </S.PostAreaSelectFigure>
          {figureOfPost && (
            <S.PostAreaRemoveFigure>
              <BiTrashAlt
                fill="#d65923"
                size={24}
                onClick={removeFigure}
                cursor="pointer"
              />
            </S.PostAreaRemoveFigure>
          )}
          <S.InputFile
            type="file"
            ref={inputUploadImage}
            onChange={selectToImage}
          />
        </S.PostAreaAddFigure>
        <S.PostAreaInputs>
          <S.PostAreaInput>
            <Input
              placeholder="Digite seu nome"
              value={nameOfPost}
              onChange={(e) => setNameOfPost(e.currentTarget.value)}
            />
          </S.PostAreaInput>
          <S.PostAreaInput>
            <InputTextArea
              placeholder="Mensagem"
              value={messageOfPost}
              onChange={(e) => setMessageOfPost(e.currentTarget.value)}
            />
          </S.PostAreaInput>
        </S.PostAreaInputs>
        <S.PostAreaButton>
          <Button label="Descartar" isLink onClick={clearedPost} />
          <Button
            label="Publicar"
            isEnable={messageOfPost != '' && messageOfPost != ''}
            onClick={savedPost}
          />
        </S.PostAreaButton>
      </S.PostAreaAddPost>
    </PostContainer>
  )
}

export default AddPost
