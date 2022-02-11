import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "./style";
import postImage from '../../assets/postImage.svg'
import { CurrentImageContext } from "../../providers/CurrentImage";
interface Event<T = EventTarget> {
  target: T;
}
export const ImagePost = ()  => {
  // const [selectedImage, setSelectedImage] = <File>useState()
  const [currentImageToRead, setCurrentImageToRead ] = useState<File>()
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {changeCurrentImage,currentImage} = useContext(CurrentImageContext)


  const onChangeHandler = (e:Event<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file) {
        setCurrentImageToRead(file)
      } else {
        setCurrentImageToRead(undefined)
      }
    }
  }

  const onClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fileInputRef.current?.click()
  }

  useEffect(()=>{
    if (currentImageToRead) {
      const reader = new FileReader()
      reader.onloadend = () => {
        changeCurrentImage(reader.result as string)    
      }
      reader.readAsDataURL(currentImageToRead)

    }

  }, [currentImageToRead])
  return (
    <Container>
          <button onClick={(e)=> onClickHandler(e)}> 
            <img 
              src={currentImage ? currentImage : postImage } 
              alt="profile"
            />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => onChangeHandler(e)}
            className="inputHidden"
          />
    </Container>
  );
}