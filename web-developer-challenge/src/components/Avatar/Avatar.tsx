import React from 'react'
import { Container, Photo, PicWrapper, TrashWrapper } from './AvatarStyles'
import picImg from  "../../../public/image.svg"
import trash from "../../../public/trash.svg"

interface AvatarProps {
  setImg: (img: string | null) => void;
  img: string | null;
}

function Avatar( {setImg, img} : AvatarProps ) {

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file)
      setImg(imageUrl)
    }
  }

  const deleteImg = () => {
    setImg(null)
  }

  const imgToRender = img ? <Photo src={img}></Photo> : <img src={picImg.src}></img>

  return (
    <Container>
        <label>
            <PicWrapper>
                {imgToRender}
            </PicWrapper>
        <input type='file' style={{display: "none"}} multiple={false} accept='image/*' onChange={(e) => handleUrl(e)}></input>
        </label>
        {img &&
          <TrashWrapper onClick={deleteImg}>
              <img src={trash.src}></img>
          </TrashWrapper>
        }
    </Container>
  )
}

export default Avatar