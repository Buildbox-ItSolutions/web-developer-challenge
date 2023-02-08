import NextImage from "next/image";

import * as S from "./styles";

import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { ImageSquare, TrashSimple } from "phosphor-react";

interface ImageDTO {
  onImageUpdate: (index: number) => void;
  onImageUpload: () => void;
}

interface Props {
  value: ImageListType;
  onChange: (
    value: ImageListType,
    addUpdatedIndex?: number[] | undefined
  ) => void;
}

export function Image({ value, onChange }: Props) {
  return (
    <ReactImageUploading
      value={value}
      onChange={onChange}
      dataURLKey="image_url"
    >
      {({ imageList, onImageUpload, onImageRemove, dragProps, errors }) => (
        <S.ImageContainer key={0}>
          <div className="imageContent">
            <button onClick={onImageUpload} {...dragProps}>
              <ImageSquare />
            </button>
            {value.map((image) => (
              <div className="preview" key={image.dataURL}>
                <NextImage
                  src={image["image_url"]}
                  alt="Photo"
                  fill
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>

          {value && (
            <button className="buttonTrash" onClick={() => onImageRemove(0)}>
              <TrashSimple />
            </button>
          )}
        </S.ImageContainer>
      )}
    </ReactImageUploading>
  );
}
