import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from "react"
import { Actions, FormContainer } from './style'

interface FormProps {
  onSubmit: (data: any) => void
}

export default function Form({ onSubmit }: FormProps) {
  const [state, setState] = useState({
    image: '',
    name: '',
    comment: '',
  })

  const [isSubmiting, setIsSubmiting] = useState(false)
  const [selectedImage, setSelectedImage] = useState<undefined | string>()

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const previewURL = URL.createObjectURL(e.target.files[0])
      setSelectedImage(previewURL)
      setState({ ...state, image: previewURL })
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputName = e.target.getAttribute('name')
    const inputValue = e.target.value

    setState({ ...state, [`${inputName}`]: inputValue })
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    setIsSubmiting(true)

    const form = event.target as HTMLFormElement
    event.preventDefault()

    await onSubmit(state)

    setState({ image: '', name: '', comment: '' })
    setSelectedImage(undefined)
    setIsSubmiting(false)

    form.reset()
  }

  const buttonDisabled = !state.name || !state.comment || isSubmiting

  return (
    <FormContainer>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input type="file" accept="image" hidden onChange={imageChange} />
          {!selectedImage ? <i className="ph ph-image-square"></i> : <Image src={selectedImage} width={100} height={100} alt="Avatar" />}
        </label>

        <input onChange={onChange} name='name' placeholder='Digite seu nome' />
        <textarea onChange={onChange} name='comment' placeholder='Mensagem' />

        <Actions>
          <button className="out" type="button">Descartar</button>
          <button className="sub" type="submit" disabled={buttonDisabled}>Publicar</button>
        </Actions>
      </form>
    </FormContainer>
  )
}
