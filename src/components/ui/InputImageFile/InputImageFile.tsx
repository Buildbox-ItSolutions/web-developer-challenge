import { useState, useEffect } from "react";
import placeholder from "src/assets/images/image-placeholder.png";
import trash from "src/assets/images/trash.png";
import { Button } from "src/components";

import {
  InputLabel,
  ImageContainer,
  TrashButton,
  Container,
} from "./styles";

interface InputProps {
  onSelect: (src: any) => void;
  clearImage: boolean;
};

const InputImageFile: React.FC<InputProps> = ({ onSelect, clearImage }) => {
  const [imageSrc, setImageSrc] = useState<any>();

  useEffect(() => {
    onSelect(imageSrc);
  }, [imageSrc]);

  useEffect(() => {
    if (clearImage) setImageSrc('');
  }, [clearImage]);

  const handleReadImage = (evt: React.BaseSyntheticEvent) => {
    const { files } = evt.target;
    const reader = new FileReader();

    reader.onloadend = function () {
      setImageSrc(reader.result);
    }

    if (!files[0]) return;
    reader.readAsDataURL(files[0]);
  };

  const handleDelete = () => setImageSrc('');

  return (
    <Container>
      <ImageContainer>
        <InputLabel>
          <input
            type="file"
            onChange={handleReadImage}
            aria-label="adicionar imagem"
          />
        </InputLabel>
        <img
          src={imageSrc || placeholder}
          className={imageSrc ? 'selected' : ''}
        />
      </ImageContainer>
      <TrashButton visible={Boolean(imageSrc)}>
        <Button onClick={handleDelete} style="icon">
          <img src={trash} />
        </Button>
      </TrashButton>
    </Container>
  );
};

export default InputImageFile;
