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
  SContainerButton
} from './styled'
import { IDataForm, IProps } from './types'
import { useAppSelector } from '../../hooks'
import { Button } from '@material-ui/core'
import { generateUniqueId } from '../../utils/post'
import { fieldValidate, isNotValid } from '../../utils/validations/form-post'

const FormPost: React.FC<IProps> = ({ submit }) => {
  const [preview, setPreview] = useState([])
  const [form, setForm] = useState({} as any)
  const loading: boolean = useAppSelector((state) => state.message.loading)
  const inputFile = React.useRef<HTMLInputElement | null>(null)
  const [formValidate, setFormValidate] = useState({} as any)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = (): void => {
    const newForm: IDataForm = {
      _id: generateUniqueId(),
      name: form.name,
      description: form.description,
      preview: preview
    }

    submit(newForm)
  }

  const clearForm = (): void => {
    setForm({})
    setPreview([])
  }

  const removeImage = (): void => {
    setPreview([])
  }

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

        <div>
          <SInputName
            autoFocus
            type="text"
            name="name"
            value={form.name || ''}
            onChange={handleChange}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.name}</p>
          </div>
        </div>

        <div>
          <SInputDescription
            name="description"
            value={form.description || ''}
            cols={30}
            rows={5}
            onChange={handleChange}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.description}</p>
          </div>
        </div>

        <SContainerButton>
          <SButtonDiscard type="submit" onClick={clearForm}>
            Descartar
          </SButtonDiscard>
          <SButtonPublish
            type="submit"
            onClick={submitForm}
            disabled={isNotValid(form, formValidate, preview)}
          >
            Publicar
          </SButtonPublish>
        </SContainerButton>
      </SContainer>
    </>
  )
}
export default FormPost
