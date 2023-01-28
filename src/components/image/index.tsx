import React from 'react'
import * as C from './style'
import ImageIconTrash from '../../assets/trash.svg'
interface IProps {
  src: File | null
  setImage: React.Dispatch<React.SetStateAction<File | null>>
}
function Image({ src, setImage }: IProps) {
  return (
    <C.ContainerPreview>
      <C.ContainerImage>
        <C.Image src={URL.createObjectURL(src as File)} />
      </C.ContainerImage>
      <C.IconDelete src={ImageIconTrash} onClick={() => setImage(null)} />
    </C.ContainerPreview>
  )
}

export default Image