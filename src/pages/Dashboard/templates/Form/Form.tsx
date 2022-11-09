import React, { useState } from 'react'
import uuid from 'react-uuid'

import Input from '../../../../components/Input'
import TextArea from '../../../../components/TextArea'
import UploadImage from '../../../../components/UploadImage'
import {
  DiscardButton,
  FormProps,
  PostParams,
  PublishButton,
  SectionActions,
  SectionForm
} from '.'

const INITIAL_VALUES: PostParams = {
  uuid: '',
  image: '',
  message: '',
  name: ''
}

const Form: React.FC<FormProps> = ({ addPost }) => {
  const [form, setForm] = useState<PostParams>(INITIAL_VALUES)

  const handleUpdateForm = (name: string, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleDiscardForm = () => {
    setForm(INITIAL_VALUES)
  }

  const handleSubmitForm = () => {
    form.uuid = uuid()
    addPost(form)
    setForm(INITIAL_VALUES)
  }

  const active = form.image.length > 0 && !!form.message && !!form.name

  return (
    <>
      <UploadImage
        name="image"
        value={form.image}
        onChange={handleUpdateForm}
      />
      <SectionForm>
        <Input
          mt="16px"
          mb="8px"
          placeholder="Digite seu nome"
          name="name"
          value={form.name}
          onChange={(event) => {
            const {
              target: { name, value }
            } = event
            handleUpdateForm(name, value)
          }}
          data-cy="cy-name"
        />
        <TextArea
          placeholder="Mensagem"
          name="message"
          value={form.message}
          onChange={(event) => {
            const {
              target: { name, value }
            } = event
            handleUpdateForm(name, value)
          }}
        />
      </SectionForm>
      <SectionActions>
        <DiscardButton
          data-cy="button-reset"
          type="reset"
          onClick={handleDiscardForm}
        >
          Descartar
        </DiscardButton>
        <PublishButton
          data-cy="button-send"
          onClick={handleSubmitForm}
          disabled={!active}
          active={active}
        >
          Publicar
        </PublishButton>
      </SectionActions>
    </>
  )
}

export default Form
