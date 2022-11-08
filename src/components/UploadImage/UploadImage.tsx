import { useState } from 'react'
import {
  Props,
  Container,
  Imagem,
  InputFile,
  Button,
  EmptyImage,
  WrapperImage,
  TrashImage
} from '.'

const UploadImage: React.FC<Props> = () => {
  const [image, setImage] = useState<string | null>(null)

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currFile = e.target.files
    if (currFile == null || currFile?.length === 0) return

    const imgURL = URL.createObjectURL(currFile[0])

    setImage(imgURL)
  }

  const handleDeleteImage = () => {
    setImage(null)
  }

  return (
    <Container>
      <WrapperImage>
        <Button type="button">
          <label htmlFor="input-file">
            {image ? (
              <Imagem src={image} />
            ) : (
              <EmptyImage src="/imgs/empty-photo.png" />
            )}
            <InputFile
              type="file"
              onChange={handleChangeImage}
              id="input-file"
            />
          </label>
        </Button>
        {image && (
          <TrashImage src="/imgs/trash.png" onClick={handleDeleteImage} />
        )}
      </WrapperImage>
    </Container>
  )
}

export default UploadImage
