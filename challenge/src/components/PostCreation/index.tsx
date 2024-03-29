import { ButtonsBox, FormBox, PhotoUpload, PostCreationBox } from "./style"
import Photo from '../../assets/image.svg'
import { createPost } from "./service";
import { useContext, useRef } from "react";
import { PostsContext } from "../../context/PostsContext";

const PostCreation = () => {
  const name = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const { posts, setPosts } = useContext(PostsContext)

  return (
    <PostCreationBox>
      <PhotoUpload>
        <img src={Photo} alt="" />
      </PhotoUpload>
      <FormBox onSubmit={(e) => createPost(e, name, text, '', posts, setPosts)}>
        <input ref={name} type="text" placeholder="Digite seu nome" required></input>
        <textarea ref={text} placeholder="Mensagem" required></textarea>
        <ButtonsBox>
          <button>Descartar</button>
          <button type="submit">Publicar</button>
        </ButtonsBox>
      </FormBox>
    </PostCreationBox>
  )
}

export default PostCreation;