import Image from 'next/image'
import uploadImage from '../../public/upload-image.png'
import styles from '../styles/form.module.css'

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.upload}>
        <Image src={uploadImage} width={24} height={24} />
      </div>
      <input
        className={styles.name}
        type="text"
        placeholder="Digite seu nome"
      />
      <textarea className={styles.message} placeholder="Mensagem" />
      <div className={styles.buttons}>
        <span className={styles.descartar}>Descartar</span>
        <button className={styles.publicar} disabled>
          Publicar
        </button>
      </div>
    </div>
  )
}

export default Form
