import React, { ChangeEvent } from "react";
import { StyledPhotoInput } from "./styled-components/styles";
import uploadImg from "@/app/presentation/assets/icons/upload.svg";
import { ImageItem } from "@/app/presentation/common/components/PostItem/styled-components/styles";

export interface PreviewImage {
  name: string;
  url: string;
}

export interface PhotoInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  getPreviewImage?: PreviewImage | undefined;
}

const PhotoInput: React.FC<PhotoInputProps> = ({
  getPreviewImage,
  onChange,
  ...props
}) => {
  return (
    <StyledPhotoInput>
      <label htmlFor="file-input">
        {!getPreviewImage ? (
          <img id="uploadImg" src={uploadImg} alt="Adicionar foto" />
        ) : (
          <ImageItem src={getPreviewImage.url} alt="Foto do usuário" />
        )}
      </label>
      <input
        id="file-input"
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
        {...props}
      />
    </StyledPhotoInput>
  );
};

export default PhotoInput;
