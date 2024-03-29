import { ButtonsBox, FormBox, PhotoUpload, PostCreationBox } from "./style"
import Photo from '../../assets/image.svg'

const PostCreation = () => {
  return (
    <PostCreationBox>
      <PhotoUpload>
        <img src={Photo} alt="" />
      </PhotoUpload>
      <FormBox>
        <input placeholder="Digite seu nome"></input>
        <textarea placeholder="Mensagem"></textarea>
        <ButtonsBox>
          <button>Descartar</button>
          <button>Publicar</button>
        </ButtonsBox>
      </FormBox>
    </PostCreationBox>
  )
}

export default PostCreation;