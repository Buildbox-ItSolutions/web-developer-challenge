import React, { forwardRef, useState, useEffect } from 'react'
import { Image, TrashSimple } from '@phosphor-icons/react'
import { FileInputContainer, ImagePreview } from './styles'
import { ImageAvatar } from '../../ImageAvatar'

interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (file: File | undefined) => void
  resetFlag: boolean
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput({ resetFlag, onChange, ...props }, ref) {
    const [imageSrc, setImageSrc] = useState<string>('')

    useEffect(() => {
      setImageSrc('')
    }, [resetFlag])

    const handleChangeImagePreview = (file: File | undefined) => {
      if (!file) {
        setImageSrc('')
        return
      }

      const objectUrl = URL.createObjectURL(file)

      setImageSrc((state) => {
        if (state) {
          URL.revokeObjectURL(state)
        }

        return objectUrl
      })
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const file = evt.target.files ? evt.target.files[0] : undefined
      handleChangeImagePreview(file)
      onChange(file)
    }

    function clearInput() {
      setImageSrc((state) => {
        if (state) {
          URL.revokeObjectURL(state)
        }

        return ''
      })
    }

    return (
      <FileInputContainer $hasImage={!imageSrc}>
        {imageSrc ? (
          <ImageAvatar src={imageSrc} />
        ) : (
          <ImagePreview>
            <Image alt="" />
          </ImagePreview>
        )}

        <input
          type="file"
          accept="image/*"
          ref={ref}
          {...props}
          onChange={handleChange}
        />

        <button onClick={() => clearInput()} type="button">
          <TrashSimple />
        </button>
      </FileInputContainer>
    )
  },
)

export default FileInput
