import React from 'react'
import Header from './components/header'
import * as C from './style'
import ImageIcon from './assets/image.svg'
import Image from './components/image'
import Feed from './components/feed'
import useValidationForm from './hooks/useValidationForm'
import { IUpdateValue } from './types/form'
import postServices from './services/posts'
import { useQuery, useMutation, useQueryClient } from 'react-query'

interface IInputFile {
  updateValueFormState: IUpdateValue
}

const InputFile = ({ updateValueFormState }: IInputFile) => {
  const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files![0]
    updateValueFormState('image', img)
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
  const { formState, updateValueFormState, completedForm, resetForm } = useValidationForm()
  const { image, name, message } = formState
  const client = useQueryClient()

  const mutation = useMutation((formData: FormData) => postServices.create(formData), {
    onSuccess: () => {
      resetForm()
      client.invalidateQueries(['posts'])
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", image as File);
    formData.append("name", name);
    formData.append("message", message);
    mutation.mutate(formData)

  }
  return (
    <div>
      <Header />
      <C.ContainerMain>
        <C.ContainerForm onSubmit={handleSubmit}>
          <C.ContainerPhoto>
            {image ? <Image src={image} updateValueFormState={updateValueFormState} /> : <InputFile updateValueFormState={updateValueFormState} />}
          </C.ContainerPhoto>
          <C.ContainerInputs>
            <C.InputName value={name} placeholder='Digite seu nome' onChange={(event) => updateValueFormState('name', event.target.value)} />
            <C.InputMessage value={message} placeholder='Mensagem' onChange={(event) => updateValueFormState('message', event.target.value)} />
          </C.ContainerInputs>
          <C.ConteinerButtons>
            <C.ButtonReset onClick={() => resetForm()}> Descartar </C.ButtonReset>
            <C.ButtonSubmit disabled={!completedForm && true} type='submit' completedForm={completedForm}> Publicar </C.ButtonSubmit>
          </C.ConteinerButtons>
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
