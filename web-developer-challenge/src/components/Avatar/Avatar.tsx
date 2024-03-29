import React from 'react'
import { Container, PicWrapper, TrashWrapper } from './AvatarStyles'
import picImg from  "../../../public/image.svg"
import trash from "../../../public/trash.svg"

function Avatar() {
  return (
    <Container>
        <label>
            <PicWrapper>
                <img src={picImg.src}></img>
            </PicWrapper>
        <input type='file' style={{display: "none"}} accept='image/*'></input>
        </label>
        <TrashWrapper>
            <img src={trash.src}></img>
        </TrashWrapper>
    </Container>
  )
}

export default Avatar