import React, { InputHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { formValidation } from '../../schema/formSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { UseMyPostContext } from '../../context/PostDataContext/useMyPostContext'
import { ReactComponent as IconTrash } from '../../assets/trash.svg'
import IconImage from '../../assets/image.png'
import PhotoDefault from '../../assets/photo-default.jpg'
import DiscardButton from '../DiscardButton'
import PublicButton from '../PublicButton'
import defaultTheme from '../../theme/defaultTheme'
import InputError from '../Helper/InputError'
import * as S from './style'

type InputProps = React.DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
))
Input.displayName = 'Input'

const FormPostFields: React.FC = () => {
  const [photoInput, setPhotoInput] = useState('')
  const [postState, setPostState] = UseMyPostContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ resolver: yupResolver(formValidation), mode: 'onChange' })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loadPhoto = (photo: any) => {
    return new Promise((resolve, reject) => {
      const fileRead = new FileReader()
      const file = photo

      fileRead.onload = () => {
        resolve(fileRead.result)
      }
      fileRead.onerror = (error) => {
        reject(error)
      }
      if (file) fileRead.readAsDataURL(file)
      else resolve(PhotoDefault)
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const photo = data.photo[0]
    try {
      const responsePhoto = await loadPhoto(photo)
      setPostState([...postState, { ...data, photo: responsePhoto }])
    } catch (error) {
      throw new Error('Houve um error ao carregar sua foto')
    }
    setPhotoInput('')
    reset()
  }

  const handleChangePhoto = async ({ target }: React.BaseSyntheticEvent) => {
    const responsePhoto = await loadPhoto(target.files[0])
    setPhotoInput(String(responsePhoto))
  }

  const handleDiscardPhoto = () => {
    setPhotoInput('')
  }

  const handleDiscardPost = () => {
    reset()
    handleDiscardPhoto()
  }

  return (
    <S.Wrapper theme={defaultTheme} onSubmit={handleSubmit(onSubmit)}>
      <S.PhotoWrapper>
        <S.InputPhotoElement
          photo={photoInput}
          onChange={handleChangePhoto}
          theme={defaultTheme}
          htmlFor="photo"
        >
          {!photoInput && <img src={IconImage} alt="Icone de imagem" />}
          <Input
            {...register('photo')}
            id="photo"
            type="file"
            className="inputFile"
          />
        </S.InputPhotoElement>
        <S.ButtonDiscardPhoto onClick={handleDiscardPhoto}>
          <IconTrash />
        </S.ButtonDiscardPhoto>
      </S.PhotoWrapper>
      <S.FieldWrapper>
        <S.InputElement
          theme={defaultTheme}
          type="text"
          defaultValue=""
          {...register('name')}
          placeholder="Nome"
        />
        {errors?.name?.type && (
          <InputError className="name" type={errors.name.type} field="name" />
        )}
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.TextAreaElement
          theme={defaultTheme}
          defaultValue=""
          {...register('message')}
          placeholder="Mensagem"
        />
        {errors?.message?.type && (
          <InputError
            className="message"
            type={errors.message.type}
            field="message"
          />
        )}
      </S.FieldWrapper>
      <S.ButtonsWrappers>
        <DiscardButton discardPostClick={handleDiscardPost} />
        <PublicButton disabled={!isValid} type="submit" />
      </S.ButtonsWrappers>
    </S.Wrapper>
  )
}

export default FormPostFields
