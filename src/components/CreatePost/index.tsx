import React, { useState } from 'react'
import uuid from 'react-uuid';

import { IoImageOutline } from 'react-icons/io5'
import { CgTrashEmpty } from 'react-icons/cg'

import FileUpload from '../FileUpload'

import { Button, CreatePostForm, ImgContainer, ImgContent, InputName, InputTextarea, Options } from './style'
import { Post } from '../../types/Post'

const CreatePost: React.FC<{ createPost: (post: Post) => void }> = ({ createPost }) => {
  const [userImage, setUserImage] = useState<string | undefined>()
  const [userName, setUserName] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const handleDiscart = () => {
    setUserImage(undefined)
    setUserName('')
    setUserMessage('')
  }

  const handleCreatePost = () => {
    if(userImage && userName.length >= 1 && userMessage.length >= 1) {
      const post = {
        id: uuid(),
        userImage,
        userName,
        userMessage,
      }
      createPost(post)

      handleDiscart()
    }
  }

  return (
    <CreatePostForm>
      <ImgContainer>
        {userImage && (
          <>
            <ImgContent>
              <img src={userImage} alt='userImage' />
            </ImgContent>
            <CgTrashEmpty className='deleteUserImage' onClick={() => setUserImage(undefined)} />
          </>
        )}
        {!userImage && (
          <FileUpload
            callback={setUserImage}
            uploadComponent={
              <ImgContent>
                <IoImageOutline />
              </ImgContent>
            }
          />
        )}
      </ImgContainer>

      <InputName
        placeholder='Digite seu nome'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <InputTextarea
        placeholder='Mensagem'
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />

      <Options>
        <span className='descartar' onClick={handleDiscart}>Descartar</span>
        <Button type='button' onClick={handleCreatePost}>Publicar</Button>
      </Options>
    </CreatePostForm>
  )
}

export default CreatePost
