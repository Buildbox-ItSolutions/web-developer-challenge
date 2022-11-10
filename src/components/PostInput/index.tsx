import React, { ChangeEvent, useEffect, useState } from 'react';
import { FormContainer, InputContainer } from './styles';
import ImgUploadIcon from '../../assets/image_upload.svg';
import { usePost } from '../../context/usePost';

const PostInput = () => {
  const [image, setImage] = useState<string | undefined>();
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");


  const { addPost } = usePost();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(URL?.createObjectURL(e.target.files[0]))
  }

  function clearForm() {
    setImage(undefined);
    setAuthor("");
    setMessage("");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ image, message, author })

    clearForm();
  }

  return (
    <>
      <InputContainer>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor='file-input'>
            <div className='image-upload'>
              <img src={ImgUploadIcon} alt="Img Upload" />
              <input
                type="file"
                id='file-input'
                onChange={handleFileChange}
              />
            </div>
          </label>

          <input
            type="text"
            placeholder='Digite seu nome'
            className='name-input'
            value={author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder='Mensagem'
            className='message-input'
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          />

          <div className='button-container'>
            <a onClick={clearForm}>Descartar</a>
            <button
              type='submit'
            >
              Publicar
            </button>
          </div>
        </FormContainer>
      </InputContainer>
    </>
  )
}

export default PostInput