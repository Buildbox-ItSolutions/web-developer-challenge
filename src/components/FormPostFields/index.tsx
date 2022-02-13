import React, { FormEvent, useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import DiscardButton from '../DiscardButton'
import PhotoPost from '../PhotoPost'
import PublicButton from '../PublicButton'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

const FormPostFields: React.FC = () => {
  const [name, setName] = useState<string>('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  return (
    <S.Wrapper>
      <S.PhotoWrapper>
        <PhotoPost photo="" alt="" />
        <S.ButtonDiscardPhoto>
          <FiTrash size={24} color={defaultTheme.colors.red} />
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
