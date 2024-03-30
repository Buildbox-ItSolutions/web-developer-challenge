/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'lucide-react'
import { Container, DragMessage, DropZoneThumb, Thumbnail } from './styles'
import { theme } from '../../styles/theme'
import { useThumbnail } from '../hooks/use-thumbnail'
import { useEffect } from 'react'

type Props = {
  thumbnail?: string | null
  onThumbnailChanged: (thumbnail: string) => void
}

export function UploadPhoto({ onThumbnailChanged, thumbnail }: Props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    thumbnail: newThumbnail,
    clearThumbnail,
  } = useThumbnail(thumbnail)

  useEffect(() => {
    if (newThumbnail) {
      onThumbnailChanged(newThumbnail)
    }
  }, [newThumbnail])

  useEffect(() => {
    if (thumbnail === '') {
      clearThumbnail()
    }
  }, [thumbnail])

  return (
    <Container {...getRootProps()} isActive={isDragActive}>
      <input {...getInputProps()} />

      <DropZoneThumb>
        {isDragActive ? (
          <DragMessage>Drop the files here ...</DragMessage>
        ) : (
          <>
            <Image
              color={theme.colors.gray[200]}
              style={{
                width: '1.2rem',
                height: '1.2rem',
              }}
            />
            <DragMessage>Drag or click here</DragMessage>
          </>
        )}
      </DropZoneThumb>

      {newThumbnail && <Thumbnail src={newThumbnail} alt="thumbnail" />}
    </Container>
  )
}
