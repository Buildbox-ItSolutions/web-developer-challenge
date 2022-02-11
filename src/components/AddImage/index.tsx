import React, { useEffect, useState } from 'react';

import { Container, DeleteButton, LabelContainer } from './styles';
import notUploadImage from '../../images/image.svg';
import trashImage from '../../images/trash.png';

import { convertFileToBlob, isFileImage } from '../../utils/fileUtils';

type Prop = {
  onChange?: (file?: File) => void;
  image?: File;
  name: string;
};

const AddImage: React.FC<Prop> = ({
  image,
  onChange = () => undefined,
  name,
}) => {
  const [imageToShow, setImageToShow] = useState(notUploadImage);

  useEffect(() => {
    convertFileToBlob(image).then((value) => {
      setImageToShow(value ? URL.createObjectURL(value) : notUploadImage);
    });
  }, [image]);

  const afterChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (isFileImage(file)) {
      onChange(file);
    }
  };

  const onClickDelete = () => {
    onChange(undefined);
  };

  return (
    <React.Fragment>
      <Container>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          onChange={afterChange}
        />
        <LabelContainer htmlFor={name}>
          <img
            src={imageToShow}
            alt="Adicionar imagem"
            loading="lazy"
            className={image ? 'fill' : 'empty'}
          />
        </LabelContainer>
      </Container>
      {image && (
        <DeleteButton onClick={onClickDelete} type="button">
          <img src={trashImage} alt="Remover a imagem" />
        </DeleteButton>
      )}
    </React.Fragment>
  );
};

export default AddImage;
