import React, { useRef, useState } from 'react'

import { Container, ImageCollected, InputLabel, ImageInput, ImageCollector } from './styles'
import imageIcon from '../../assets/icons/image.svg'

function ImageWrapper() {
  const [imageURL, setImageURL] = useState("");
  const inputFileRef = useRef<any>();
  
  const onLabelClick = () => {
    if (inputFileRef.current) {

      inputFileRef.current.click();
    }
  }

  const onFileChangeCapture = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(e.target.files);
    if (e.target.files) {
      setImageURL(URL.createObjectURL(e.target.files[0]))
    } else {
      setImageURL("")
    }
  };

  return (
    <Container>
      <ImageCollector>
        <InputLabel onClick={onLabelClick}>
          <ImageCollected 
            hasImage={imageURL ? true : false} 
            src={imageURL ? imageURL : imageIcon} 
            alt="" 
          />
        </InputLabel>
        <ImageInput  
          type="file" 
          accept="image/*" 
          ref={inputFileRef}
          onChangeCapture={onFileChangeCapture}
        />
      </ImageCollector>
    </Container>
  )
}

export default ImageWrapper