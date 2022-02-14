import React, { useContext, useEffect, useRef } from "react";

import { Container, InputLabel, ImageInput, ImageCollector, TrashIcon } from "./styles";
import ImageCollected from "../ImageDisplay";
import imageIcon from "../../assets/icons/image.svg";
import { CraftContext } from "../../contexts/CraftContext";
import trashIcon from "../../assets/icons/trash.svg";

interface ImageWrapperProps {
  onSelectImage: (file: File) => void
}

function ImageWrapper(props: ImageWrapperProps) {
  const inputFileRef = useRef<any>();
  const { image, setImage, author, message } = useContext(CraftContext);

  useEffect(() => {
    if (!image && !author && !message) {
      inputFileRef.current.value = null
    }
  }, [image, author, message])

  const onLabelClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    
    if (e && e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      props.onSelectImage(e.target.files[0])
    } else {
      setImage("");
    }
  };

  const clearImage = () => {
    inputFileRef.current.value = null
    setImage("");
  }

  return (
    <Container>
      <ImageCollector hasImage={image ? true : false}>
        {
          image &&
          <TrashIcon src={trashIcon} onClick={clearImage} />
        }
        <InputLabel onClick={onLabelClick}>
          <ImageCollected
            hasImage={image ? true : false}
            src={image ? image : imageIcon}
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
  );
}

export default ImageWrapper;
