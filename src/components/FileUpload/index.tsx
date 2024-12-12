import React, { useRef } from 'react'

import { FileUploadProps } from './types'

const FileUpload: React.FC<FileUploadProps> = ({
  uploadComponent,
  callback,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onFileChange = async () => {
    const file = inputRef.current?.files
    if (file) {
      const fileType = file[0].type.includes('image')
      if(fileType) {
        const fileUrl = URL.createObjectURL(file[0])
        callback(fileUrl)
      }
      inputRef.current.value = ''
    }
  }

  const handleInput = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <div
        onClick={handleInput}
        aria-hidden
      >
        {uploadComponent}
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type='file'
          accept='image/*'
          onChange={onFileChange}
        />
      </div>
    </>
  )
}

export default FileUpload
