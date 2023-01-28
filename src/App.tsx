import React, { HTMLProps, ImgHTMLAttributes, useState } from 'react'
import Header from './components/header'
import * as C from './style'
import ImageIcon from './assets/image.svg'
import Image from './components/image'
import Feed from './components/feed'

interface IInputFile {
  setImage: React.Dispatch<React.SetStateAction<File | null>>
}
const InputFile = ({ setImage }: IInputFile) => {
  const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('chamei')
    const img = event.target.files![0]
    setImage(img)
  }
  return (
    <>
      <C.LabelInputFile htmlFor='file'>
        <C.IconImage src={ImageIcon} />
      </C.LabelInputFile>
      <C.InputFile type='file' name='file' onChange={uploadHandler} />
    </>
  )
}
function App() {
  const [image, setImage] = useState<File | null>(null)
  return (
    <div>
      <Header />
      <C.ContainerMain>
        <C.ContainerForm>
          <C.ContainerPhoto>
            {image ? <Image src={image} setImage={setImage} /> : <InputFile setImage={setImage} />}
          </C.ContainerPhoto>
          <C.ContainerInputs>
            <C.InputName placeholder='Digite seu nome' />
            <C.InputMessage placeholder='Mensagem' />
          </C.ContainerInputs>
        </C.ContainerForm>

        <Feed />
      </C.ContainerMain>
    </div>
  )
}

export default App
function useFile(): { transformFilme: any } {
  throw new Error('Function not implemented.')
}
