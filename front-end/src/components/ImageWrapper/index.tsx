import React, { useContext, useRef } from "react";

import { Container, InputLabel, ImageInput, ImageCollector } from "./styles";
import ImageCollected from "../ImageDisplay";
import imageIcon from "../../assets/icons/image.svg";
import { CraftContext } from "../../contexts/CraftContext";

function ImageWrapper() {
  const inputFileRef = useRef<any>();
  const { image, setImage } = useContext(CraftContext);

  const onLabelClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setImage("");
    }
  };

  return (
    <Container>
      <ImageCollector hasImage={image ? true : false}>
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
