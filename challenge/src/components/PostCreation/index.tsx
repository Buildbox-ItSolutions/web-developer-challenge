import { ButtonsBox, FormBox, PhotoChoosed, PhotoUpload, PostCreationBox, PublishButtonGreen, TrashIcon } from "./style"
import Photo from '../../assets/image.svg'
import { createPost, discardPost, handlePublishing } from "./service";
import React, { useContext, useRef, useState } from "react";
import { PostsContext } from "../../context/PostsContext";
import Image from '../../assets/user-image.png'
import Trash from '../../assets/trash.svg'

const PostCreation = ({
  setCreatedPost,
}: {
  setCreatedPost: React.Dispatch<React.SetStateAction<number | null>>
}) => {
  const [image, setImage] = useState<boolean>(false)
  const [publish, setPublish] = useState<boolean>(false)
  const name = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const { posts, setPosts } = useContext(PostsContext)

  return (
    <PostCreationBox>
      {image ?
        <PhotoChoosed>
          <img onClick={() => setImage(false)} src={Image} alt="" />
          <TrashIcon onClick={() => setImage(false)}>
            <img src={Trash} alt="" />
          </TrashIcon>
        </PhotoChoosed>
        :
        <PhotoUpload onClick={() => setImage(true)}>
          <img src={Photo} alt="" />
        </PhotoUpload>
      }
      <FormBox onSubmit={(e) => createPost(e, name, text, '', posts, setPosts, setCreatedPost, setImage)}>
        <input
          ref={name}
          type="text"
          placeholder="Digite seu nome"
          onChange={() => handlePublishing(name, text, image, setPublish)}
          required></input>
        <textarea
          ref={text}
          placeholder="Mensagem"
          onChange={() => handlePublishing(name, text, image, setPublish)}
          required></textarea>
        <ButtonsBox>
          <button onClick={() => {
            setImage(false)
            discardPost(name, text)
          }}>Descartar</button>
          {publish ?
            <PublishButtonGreen type="submit">Publicar</PublishButtonGreen>
            :
            <button type="submit">Publicar</button>
          }
        </ButtonsBox>
      </FormBox>
    </PostCreationBox>
  )
}

export default PostCreation;