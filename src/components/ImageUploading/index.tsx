import * as S from "./styles";

import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { ImageSquare } from "phosphor-react";

interface Props {
  value: ImageListType;
  onChange: (
    value: ImageListType,
    addUpdatedIndex?: number[] | undefined
  ) => void;
}

export function Image({ value, onChange }: Props) {
  return (
    <ReactImageUploading value={value} onChange={onChange}>
      {({ onImageUpload, onImageRemove, onImageUpdate, dragProps, errors }) => (
        <S.ImageContainer>
          <button onClick={onImageUpload} {...dragProps}>
            <ImageSquare />
          </button>
        </S.ImageContainer>
      )}
    </ReactImageUploading>
  );
}
