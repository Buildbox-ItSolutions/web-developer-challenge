import Image from 'next/image'
import { useRef } from 'react'

import { CreatePostContainer } from './style'

export default function CreatePost() {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const onImageClick = () => {
    if (inputFileRef.current) inputFileRef.current.click()
  }

  return (
    <CreatePostContainer>
      <div className="card">
        <form>
          <div className="selectImage" onClick={onImageClick}>
            <Image
              src="/image.png"
              alt="image icon"
              width="24px"
              height="24px"
            />
            <input type="file" ref={inputFileRef} accept=".png, .jpg, .jpeg" />
          </div>
          <input
            className="inputName"
            type="text"
            name="name"
            placeholder="Digite seu nome"
          />
          <textarea placeholder="Mensagem" />
          <div className="buttonsArea">
            <button className="descartar">Descartar</button>
            <button className="publicar">Publicar</button>
          </div>
        </form>
      </div>
    </CreatePostContainer>
  )
}
