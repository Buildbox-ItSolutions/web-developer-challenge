import { useState } from 'react'
import Image from 'next/image'
import uploadImage from '../../public/upload-image.png'
import trashImage from '../../public/trash.png'
import styles from '../styles/form.module.css'
import { useDispatchPosts } from '../components/PostsContext'

const Form = () => {
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatchPosts()

  function handlePhotoChange(e: any) {
    setPhoto(URL.createObjectURL(e.target.files[0]))
  }

  function handleDeletePhoto(e: any) {
    setPhoto('')
  }

  function handleChangeName(e: any) {
    setName(e.target.value)
  }

  function handleChangeMessage(e: any) {
    setMessage(e.target.value)
  }

  function handleDiscard(e: any) {
    setPhoto('')
    setName('')
    setMessage('')
  }

  function handleSubmit(e: any) {
    dispatch({ type: 'CREATE_POST', payload: { photo, message, author: name } })
    setMessage('')
  }

  return (
    <div className={styles.form}>
      {photo ? (
        <div className={styles.photoWrapper}>
          <div className={styles.photoContainer}>
            <Image src={photo} width={88} height={88} objectFit="cover" />
          </div>
          <div className={styles.trash} onClick={handleDeletePhoto}>
            <Image src={trashImage} width={24} height={24} />
          </div>
        </div>
      ) : (
        <label htmlFor="fileInput" className={styles.label}>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <div className={styles.upload}>
            <Image src={uploadImage} width={24} height={24} />
          </div>
        </label>
      )}
      <input
        className={styles.name}
        type="text"
        placeholder="Digite seu nome"
        onInput={handleChangeName}
        value={name}
      />
      <textarea
        className={styles.message}
        placeholder="Mensagem"
        onChange={handleChangeMessage}
        value={message}
      />
      <div className={styles.buttons}>
        <span className={styles.descartar} onClick={handleDiscard}>
          Descartar
        </span>
        <button
          className={styles.publicar}
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
