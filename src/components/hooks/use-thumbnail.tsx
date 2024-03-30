import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function useThumbnail(defaultThumbnail: string | null = null) {
  const [thumbnail, setThumbnail] = useState<string | null>(defaultThumbnail)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: (files) => {
      const file = files[0]
      const url = URL.createObjectURL(file)
      setThumbnail(url)
    },
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
  })

  function clearThumbnail() {
    setThumbnail(null)
  }

  useEffect(() => {
    if (defaultThumbnail) {
      setThumbnail(defaultThumbnail)
    }
  }, [defaultThumbnail])

  return {
    thumbnail,
    getRootProps,
    getInputProps,
    isDragActive,
    clearThumbnail,
  }
}
