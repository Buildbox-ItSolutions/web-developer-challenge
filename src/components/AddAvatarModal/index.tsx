import { Dispatch, SetStateAction, MouseEvent, FormEvent } from 'react'
import { usePost } from '../../contexts/PostContext'

import { ModalContainer, ModalWrapper, Form } from './styles'
import deletar from '../../../assets/delete.svg'
import image from '../../../assets/image.svg'

interface AddAvatarModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function AddAvatarModal({ isOpen, setIsOpen }: AddAvatarModalProps) {
  const { register, watch, resetField } = usePost()

  const { username } = watch()

  function closeModal() {
    setIsOpen(!isOpen)
    resetField('username')
  }

  function outsideClick(e: MouseEvent) {
    if (e.target === e.currentTarget) closeModal()
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <ModalContainer
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={outsideClick}
    >
      <ModalWrapper>
        <button onClick={closeModal}>
          <img src={deletar} />
        </button>

        {username.split('').length > 2 ? (
          <img src={`https://github.com/${username}.png`} />
        ) : (
          <div>
            <img src={image} />
          </div>
        )}

        <Form action="Submit" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            id="username"
            {...register('username')}
            placeholder="Usuário do Github"
          />

          <button type="submit">Salvar</button>
        </Form>
      </ModalWrapper>
    </ModalContainer>
  )
}
