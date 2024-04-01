import { useRef } from 'react'
import { ImgContainer, ImgLabelContainer } from './style'
import { CiImageOn } from 'react-icons/ci'

interface ImgLabelProps {
  img: string | null
  setImg: React.Dispatch<React.SetStateAction<string | null>>
}

export function ImgLabel({ img, setImg }: ImgLabelProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const imgPreview = URL.createObjectURL(file)
      setImg(imgPreview)
    }

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <ImgLabelContainer htmlFor="imgUpload">
      {img ? <ImgContainer src={img} /> : <CiImageOn />}
      <input
        id="imgUpload"
        ref={inputRef}
        type="file"
        onChange={handleChangeAvatar}
      />
    </ImgLabelContainer>
  )
}
