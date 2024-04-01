import { useState } from 'react'
import { Button } from '../Button'
import { ImgLabel } from '../ImgLabel'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { TextButton } from '../TextButton'
import { ButtonsContainer, CreatePostContainer, InfoContainer } from './style'
import { usePostsLocalStorageContext } from '../../hooks/usePostsLocalStorage'

export function CreatePost() {
  const { publishNewPost } = usePostsLocalStorageContext()

  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [img, setImg] = useState<string | null>(null)

  function ifValuesAreEmpty(): boolean {
    return (
      inputValue.trim() === '' || textAreaValue.trim() === '' || img === null
    )
  }

  function setValuesEmpty() {
    setInputValue('')
    setTextAreaValue('')
    setImg(null)
  }

  function handleDiscard() {
    if (!confirm('Deseja descartar o post?')) {
      return
    }
    setValuesEmpty()
  }

  function handlePublishNewPost() {
    publishNewPost(textAreaValue, inputValue, img ?? '')
    setValuesEmpty()
  }

  return (
    <CreatePostContainer>
      <ImgLabel img={img} setImg={setImg} />
      <InfoContainer>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextArea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />
      </InfoContainer>
      <ButtonsContainer>
        <TextButton
          text="Descartar"
          onClick={handleDiscard}
          disabled={ifValuesAreEmpty()}
        />
        <Button
          text="Publicar"
          disabled={ifValuesAreEmpty()}
          onClick={handlePublishNewPost}
        />
      </ButtonsContainer>
    </CreatePostContainer>
  )
}
