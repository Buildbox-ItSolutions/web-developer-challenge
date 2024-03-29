import React, { ChangeEvent, useState } from 'react'
import Trash from '../../assets/img/trash.svg'
import {
  SPreview,
  SButton,
  SContainer,
  SContainerImage,
  SImage,
  SImgTrash,
  SInputName,
  SInputDescription,
  SButtonPublish,
  SButtonDiscard,
  SContainerButton
} from './styled'
import { IProps } from './types'
import { useAppSelector } from '../../hooks'
import { Button } from '@material-ui/core'

const FormPost: React.FC<IProps> = ({ submit }) => {
  const [preview, setPreview] = useState([])
  const loading: boolean = useAppSelector((state) => state.message.loading)

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
        <SContainerImage>
          {preview.length ? (
            <>
              <SPreview>
                <SImage src={URL.createObjectURL(preview[0])} />
                <Button onClick={removeImage} component="label">
                  Remover
                </Button>
              </SPreview>
            </>
          ) : (
            ''
          )}

          <>
            <SButton
              variant="contained"
              color="primary"
              size="small"
              component="label"
            >
              Upload Foto
              <input
                accept="image/*"
                type="file"
                name="picture"
                hidden
                onChange={previewImg}
                disabled={loading}
              />
            </SButton>
          </>
          <SImage />
          <SImgTrash src={Trash} />
        </SContainerImage>
        <SInputName type="text" />
        <SInputDescription type="text" />
        <SContainerButton>
          <SButtonDiscard type="button">Descartar</SButtonDiscard>
          <SButtonPublish type="button">Publicar</SButtonPublish>
        </SContainerButton>
      </SContainer>
    </>
  )
}
export default FormPost
