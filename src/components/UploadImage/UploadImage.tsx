import {
  Button,
  Container,
  EmptyImage,
  Imagem,
  InputFile,
  Props,
  TrashImage,
  WrapperImage
} from '.'

const UploadImage = ({ name, onChange, value }: Props) => {
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currFile = e.target.files
    if (currFile == null || currFile?.length === 0) return

    const imgURL = URL.createObjectURL(currFile[0])

    onChange(name, imgURL)
  }

  const handleDeleteImage = () => {
    onChange(name, '')
  }

  return (
    <Container>
      <WrapperImage>
        <Button type="button">
          <label htmlFor="input-file">
            {value ? (
              <Imagem src={value} />
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
        {value && (
          <TrashImage
            src="/imgs/trash.png"
            onClick={handleDeleteImage}
            data-cy="button-delete-img"
          />
        )}
      </WrapperImage>
    </Container>
  )
}

export default UploadImage
