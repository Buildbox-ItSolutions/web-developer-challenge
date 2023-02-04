import React, { useContext, useEffect, useState } from 'react';
import Input from '../../atoms/Input';
import * as P from './styles'
import { FileImage } from 'phosphor-react';
import { IPost } from '../../../interfaces/IPost';
import TextArea from '../../atoms/TextArea';
import { PostContext } from '../../../context/PostContext';



const PostForm: React.FC = () => {

  const initialValue = { author: '', message: '' }
  const { creatingPost, fetchPostData, posts } = useContext(PostContext)
  const [postValues, setPostValues] = useState<IPost>(initialValue);
  const [isEmpty, setIsEmpty] = useState(true)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostValues({ ...postValues, [name]: value });

    if (postValues.author && postValues.message) {
      setIsEmpty(false)
    }
  }

  const clearInputs = () => {
    setPostValues(initialValue)
    setIsEmpty(true)
  }

  useEffect(fetchPostData, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    creatingPost(postValues.author, postValues.message)
    setPostValues(initialValue)
  }

  return (
    <P.Container>
      <P.Form onSubmit={handleSubmit}>
        <P.Header>
          <div>
            <FileImage size={26} weight="thin" />
          </div>
        </P.Header>
        <Input
          type={'text'}
          name={"author"}
          placeholder={'Nome'}
          value={postValues.author}
          onChangeInput={handleChange}
        />

        <TextArea
          type={'text'}
          name={"message"}
          placeholder={'Digite sua mensagem'}
          value={postValues.message}
          onChangeTextArea={handleChange}
        />

        <P.ButtonContainer>
          <P.Button
            className='discard'
            color='#575757'
            padding='1.2rem'
            textDecoration='underline'
            onClick={clearInputs}
            type='reset'
            disabled={isEmpty}
          >
            Descartar
          </P.Button>
          <P.Button
            className='publish'
            background='#71BB00'
            color='#ffffff'
            padding='1.2rem'
            bRadius='1rem'
            type='submit'
            disabled={isEmpty}
          >
            Publicar
          </P.Button>
        </P.ButtonContainer>
      </P.Form>
    </P.Container>
  )
}

export default PostForm