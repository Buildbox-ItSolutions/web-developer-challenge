import React, { FormEvent, useState } from 'react'
import { ReactComponent as IconTrash } from '../../assets/trash.svg'
import { ReactComponent as IconImage } from '../../assets/image.svg'
import DiscardButton from '../DiscardButton'
import PublicButton from '../PublicButton'
import * as S from './style'

const FormPostFields: React.FC = () => {
  const [name, setName] = useState<string>('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  return (
    <S.Wrapper>
      <S.PhotoWrapper>
        <S.InputPhotoElement htmlFor="photo">
          <IconImage />
          <input id="photo" name="photo" type="file" className="inputFile" />
        </S.InputPhotoElement>
        <S.ButtonDiscardPhoto>
          <IconTrash />
        </S.ButtonDiscardPhoto>
      </S.PhotoWrapper>
      <S.InputElement
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <S.TextAreaElement placeholder="Texto" />
      <S.ButtonsWrappers>
        <DiscardButton />
        <PublicButton />
      </S.ButtonsWrappers>
    </S.Wrapper>
  )
}

export default FormPostFields
