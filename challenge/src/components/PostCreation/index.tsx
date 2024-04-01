import { ButtonsBox, FormBox, PhotoChoosed, PhotoUpload, PostCreationBox } from "./style"
import Photo from '../../assets/image.svg'
import { createPost } from "./service";
import React, { useContext, useRef, useState } from "react";
import { PostsContext } from "../../context/PostsContext";
import Image from '../../assets/user-image.png'

const PostCreation = ({
  setCreatedPost,
}: {
  setCreatedPost: React.Dispatch<React.SetStateAction<number | null>>
}) => {
  const [image, setImage] = useState<boolean>(false)
  const name = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const { posts, setPosts } = useContext(PostsContext)

  return (
    <PostCreationBox>
      {image ?
        <PhotoChoosed onClick={() => setImage(false)} src={Image} alt="" />
        :
        <PhotoUpload onClick={() => setImage(true)}>
          <img src={Photo} alt="" />
        </PhotoUpload>
      }
      <FormBox onSubmit={(e) => createPost(e, name, text, '', posts, setPosts, setCreatedPost)}>
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