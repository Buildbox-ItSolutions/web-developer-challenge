import React, { useEffect, useState } from 'react';

import { Container, LabelContainer } from './styles';
import notUploadImage from '../../images/image.svg';
import { FieldValues, UseFormRegister } from 'react-hook-form';
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

  return (
    <Container>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        onChange={afterChange}
      />
      <LabelContainer htmlFor={name}>
        <img src={imageToShow} alt="Adicionar imagem" loading="lazy" />
      </LabelContainer>
    </Container>
  );
};

export default AddImage;
