import React from 'react'
import * as C from './style'
import ImageIconTrash from '../../assets/trash.svg'
import { IUpdateValue } from '../../types/form'
interface IProps {
  src: File | null
  updateValueFormState: IUpdateValue
}
function Image({ src, updateValueFormState }: IProps) {
  return (
    <C.ContainerPreview>
      <C.ContainerImage>
        <C.Image src={URL.createObjectURL(src as File)} />
      </C.ContainerImage>
      <C.IconDelete src={ImageIconTrash} onClick={() => updateValueFormState('image', null)} />
    </C.ContainerPreview>
  )
}

export default Image