import { useState, FormEvent } from 'react'
import { usePost } from '../../contexts/PostContext'
import { AddAvatarModal } from '../AddAvatarModal'

import { FormContainer, EmpityAvatar, Form, Avatar } from './styles'
import image from '../../../assets/image.svg'
import trash from '../../../assets/trash.svg'

export function AddPostForm() {
  const { addNewPost, register, watch, reset, resetField } = usePost()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const { username, name, message } = watch()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    addNewPost()
  }

  return (
    <FormContainer>
      {username ? (
        <Avatar>
          <img src={`https://github.com/${username}.png`} />

          <button onClick={() => resetField('username')}>
            <img src={trash} />
          </button>
        </Avatar>
      ) : (
        <EmpityAvatar onClick={() => setModalIsOpen(!modalIsOpen)}>
          <img src={image} />
        </EmpityAvatar>
      )}

      <Form
        action="submit"
        onSubmit={handleSubmit}
        isReady={username && name && message ? true : false}
      >
        <input
          required
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register('name')}
        />

        <textarea
          required
          id="message"
          placeholder="Mensagem"
          {...register('message')}
        />

        <div>
          <button type="button" onClick={() => reset()}>
            Descartar
          </button>
          <button type="submit">Publicar</button>
        </div>
      </Form>

      <AddAvatarModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
    </FormContainer>
  )
}
