/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { useContext, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PostsContext from '../../../shared/contexts/posts'
import { getBase64 } from '../../../shared/utils/getBase64'
import { CreatePostContainer } from './style'

export default function CreatePost() {
  const { posts, setPosts } = useContext(PostsContext)

  const [base64, setBase64] = useState<string>('')

  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputMessageRef = useRef<HTMLTextAreaElement>(null)

  function cleanForm() {
    if (inputNameRef.current && inputMessageRef.current) {
      setBase64('')
      inputNameRef.current.value = ''
      inputMessageRef.current.value = ''
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (
      inputNameRef.current &&
      inputMessageRef.current &&
      inputNameRef.current.value !== '' &&
      inputMessageRef.current.value !== '' &&
      base64 !== ''
    ) {
      const newPost = {
        id: uuidv4(),
        image: base64,
        name: inputNameRef.current.value,
        message: inputMessageRef.current.value,
      }

      setPosts([...posts, newPost])

      cleanForm()

      toast.success('Publicação enviada com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else {
      if (base64 === '') {
        toast.error('Adicione uma imagem à publicação!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
      }
      if (inputNameRef.current && inputNameRef.current.value === '') {
        toast.error('Preencha seu nome na publicação!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
      }

      if (inputMessageRef.current && inputMessageRef.current.value === '') {
        toast.error('Escreva uma mensagem na publicação!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
      }
    }
  }

  async function onChangeFileInput(file: File) {
    const newBase64 = await getBase64(file)

    setBase64(newBase64 as string)
  }

  return (
    <CreatePostContainer>
      <div className="card">
        <form
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <div className="selectImage">
            {base64 === '' ? (
              <label htmlFor="imageFileInput">
                <img src="/image.png" alt="image icon" />
              </label>
            ) : (
              <label htmlFor="imageFileInput">
                <img
                  src={base64}
                  alt="selected image"
                  className="selectedImage"
                />
              </label>
            )}
            <input
              id="imageFileInput"
              type="file"
              onClick={(e) => ((e.target as HTMLInputElement).value = '')}
              onChange={(e) => {
                if (e.target.files) {
                  onChangeFileInput(e.target.files[0])
                }
              }}
              accept=".png, .jpg, .jpeg"
            />
            {base64 !== '' ? (
              <img
                src="/trash.png"
                alt="trash icon"
                className="trashIcon"
                onClick={() => setBase64('')}
              />
            ) : (
              ''
            )}
          </div>
          <input
            className="inputName"
            ref={inputNameRef}
            type="text"
            name="name"
            placeholder="Digite seu nome"
          />
          <textarea ref={inputMessageRef} placeholder="Mensagem" />
          <div className="buttonsArea">
            <button className="descartar" onClick={cleanForm} type="button">
              Descartar
            </button>
            <button className="publicar" type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer limit={3} />
    </CreatePostContainer>
  )
}
