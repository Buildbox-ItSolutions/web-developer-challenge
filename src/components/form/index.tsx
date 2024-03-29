import React, { ChangeEvent, useState } from 'react'
import Trash from '../../assets/img/trash.svg'
import File from '../../assets/img/file.svg'
import {
  SContainer,
  SImage,
  SImgTrash,
  SInputName,
  SInputDescription,
  SButtonPublish,
  SButtonDiscard,
  SContainerButton,
} from './styled'
import { IProps } from './types'
import { useAppSelector } from '../../hooks'
import { Button } from '@material-ui/core'

const FormPost: React.FC<IProps> = ({ submit }) => {
  const [preview, setPreview] = useState([])
  const loading: boolean = useAppSelector((state) => state.message.loading)
  const inputFile = React.useRef<HTMLInputElement | null>(null)

  const removeImage = () => setPreview([])

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const picture = event.target.files && event.target.files[0]
    if (picture) {
      setPreview(Array(picture))
    }
  }

  return (
    <>
      <SContainer>
        <SImage
          src={preview.length === 0 ? File : URL.createObjectURL(preview[0])}
          onClick={() => inputFile.current.click()}
        />
        {preview.length !== 0 ? (
          <Button onClick={removeImage} component="label">
            <SImgTrash src={Trash} />
          </Button>
        ) : (
          <></>
        )}
        <input
          accept="image/*"
          type="file"
          name="picture"
          hidden
          ref={inputFile}
          onChange={previewImg}
          disabled={loading}
          style={{ display: 'none' }}
        />

        <SInputName type="text" />
        <SInputDescription cols={30} rows={5}></SInputDescription>
        <SContainerButton>
          <SButtonDiscard type="button">Descartar</SButtonDiscard>
          <SButtonPublish type="button">Publicar</SButtonPublish>
        </SContainerButton>
      </SContainer>
    </>
  )
}
export default FormPost
