import React, { useState } from 'react'
import { useDispatchPosts } from '../contexts/PostsContext'
import Image from 'next/image'
import uploadImage from '../../public/upload-image.png'
import trashImage from '../../public/trash.png'
import styles from '../styles/form.module.css'

const Form = () => {
  const [photo, setPhoto] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const dispatch = useDispatchPosts()

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.files) {
      setPhoto(URL.createObjectURL(event.target.files[0]))
    }
  }

  function handleDeletePhoto(): void {
    setPhoto('')
  }

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }

  function handleChangeMessage(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setMessage(event.target.value)
  }

  function handleDiscard(): void {
    setPhoto('')
    setName('')
    setMessage('')
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>): void {
    dispatch({ type: 'CREATE_POST', payload: { photo, message, author: name } })
    handleDiscard()
  }

  return (
    <div className={styles.formContainer}>
      {photo ? (
        <div className={styles.photoContainer}>
          <div className={styles.photoLayout}>
            <Image
              src={photo}
              width={88}
              height={88}
              objectFit="cover"
              unoptimized
            />
          </div>
          <div className={styles.trashButton} onClick={handleDeletePhoto}>
            <Image src={trashImage} width={24} height={24} unoptimized />
          </div>
        </div>
      ) : (
        <label htmlFor="fileInput" className={styles.fileInputContainer}>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <div className={styles.uploadImage}>
            <Image src={uploadImage} width={24} height={24} unoptimized />
          </div>
        </label>
      )}
      <input
        className={styles.nameInput}
        type="text"
        placeholder="Digite seu nome"
        spellCheck="false"
        maxLength={40}
        onChange={handleChangeName}
        value={name}
      />
      <textarea
        className={styles.messageInput}
        placeholder="Mensagem"
        spellCheck="false"
        maxLength={280}
        onChange={handleChangeMessage}
        value={message}
      />
      <div className={styles.buttonsContainer}>
        <span className={styles.discardButton} onClick={handleDiscard}>
          Descartar
        </span>
        <button
          className={styles.publishButton}
          disabled={!photo || !name || !message}
          onClick={handleSubmit}
        >
          Publicar
        </button>
      </div>
    </div>
  )
}

export default Form
