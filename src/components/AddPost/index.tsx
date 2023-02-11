import React, { useRef, useState, useContext } from 'react'

/* frame-motion */
import { motion } from 'framer-motion'

/* styles */
import * as S from './style'

/* icons */
import { RxImage } from 'react-icons/rx'

/* components */
import PostContainer from '../PostContainer'
import Input from '../Input'
import InputTextArea from '../InputTextArea'
import Button from '../Button'
import PostAreaSelectFigure from '../PostAreaSelectFigure'

/* context  */
import { Post, PostContext } from '../../context/PostContext'

const AddPost = (): React.ReactElement => {
  const { posts, setPosts } = useContext(PostContext)

  /* ref */
  const inputUploadImage = useRef<HTMLInputElement>(null)

  const [figureOfPost, setFigureOfPost] = useState<string | null>(null)
  const [nameOfPost, setNameOfPost] = useState('')
  const [messageOfPost, setMessageOfPost] = useState('')

  const openWindowToSelectImage = () => {
    inputUploadImage?.current?.click()
  }

  const selectToImage = () => {
    if (inputUploadImage.current?.files?.length) {
      const profileLoad = window.URL.createObjectURL(
        inputUploadImage?.current?.files[0]
      )
      inputUploadImage.current.value = ''
      setFigureOfPost(profileLoad)
    }
  }

  const removeFigure = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation()
    setFigureOfPost(null)
  }

  const clearedPost = () => {
    setFigureOfPost(null)
    setNameOfPost('')
    setMessageOfPost('')
  }

  const savedPost = () => {
    const postsArray: Post[] = [...posts]

    postsArray.unshift({ figureOfPost, nameOfPost, messageOfPost })

    setPosts(postsArray)
    clearedPost()
  }

  return (
    <PostContainer>
      <S.PostAreaAddPost>
        <S.PostAreaAddFigure>
          <PostAreaSelectFigure onClick={openWindowToSelectImage}>
            {figureOfPost ? (
              <S.PostAreaImage src={figureOfPost} />
            ) : (
              <RxImage size={24} />
            )}
            {figureOfPost && (
              <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                <S.PostAreaRemoveFigure>
                  <img
                    src="/assets/images/trash.svg"
                    alt="trash"
                    onClick={(e) => removeFigure(e)}
                  />
                </S.PostAreaRemoveFigure>
              </motion.div>
            )}
          </PostAreaSelectFigure>

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
              name="name"
              value={nameOfPost}
              onChange={(e) => setNameOfPost(e.currentTarget.value)}
            />
          </S.PostAreaInput>
          <S.PostAreaInput>
            <InputTextArea
              placeholder="Mensagem"
              name="message"
              value={messageOfPost}
              onChange={(e) => setMessageOfPost(e.currentTarget.value)}
            />
          </S.PostAreaInput>
        </S.PostAreaInputs>
        <S.PostAreaButton>
          <Button label="Descartar" isLink onClick={clearedPost} />
          <Button
            label="Publicar"
            isEnable={nameOfPost.length > 0 && messageOfPost.length > 0}
            disabled={nameOfPost.length <= 0 || messageOfPost.length <= 0}
            onClick={savedPost}
          />
        </S.PostAreaButton>
      </S.PostAreaAddPost>
    </PostContainer>
  )
}

export default AddPost
