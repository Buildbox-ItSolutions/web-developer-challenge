import React, { useEffect, useState } from 'react'

const Test: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState(null)

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }

  return (
      <div>
          <input type='file' onChange={onSelectFile} />
          {selectedFile &&  <img height={200} width={200} src={preview} /> }
      </div>
  )
}

export default Test
