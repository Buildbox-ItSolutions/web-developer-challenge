import { useState, ChangeEvent, useEffect } from "react";
import { DeleteIcon, UploadIcon } from "./icons";
import { FileUploaderProps, FileObjectType } from "./types";
import {
  UploaderBtn,
  UploaderBtnWrapper,
  UploaderContainer,
  UploaderFile,
  UploaderFileInput,
  UploaderFileInputLabel,
  UploaderPlaceholder,
} from "./styles";

const ImageUpload = ({
  onFileAdded,
  onFileRemoved,
  uploadIcon,
  deleteIcon,
  style,
}: FileUploaderProps): JSX.Element => {
  const [currentImg, setCurrentImg] = useState<Partial<FileObjectType>>({
    file: {} as File,
    dataUrl: "",
  });

  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;

    if (files != null && files.length > 0) {
      const imageObject = {
        file: files[0],
        dataUrl: URL.createObjectURL(files[0]),
      };
      setCurrentImg((oldImage) => {
        return { ...oldImage, ...imageObject };
      });
      if (onFileAdded) {
        onFileAdded(imageObject);
      }
    }
  };

  const handleDeleteImage = (): void => {
    if (onFileRemoved != null && Object.keys(currentImg).length > 0) {
      const partialCurrentImg: Partial<FileObjectType> = currentImg;
      const _currentImg: FileObjectType = partialCurrentImg as FileObjectType;
      onFileRemoved(_currentImg);
    }
    setCurrentImg({});
  };

  useEffect(() => {
    const handleClearEvent = () => handleDeleteImage();
    window.addEventListener("imagem-upload-clear-event", handleClearEvent);

    return () => {
      window.removeEventListener("imagem-upload-clear-event", handleClearEvent);
    };
  }, []);

  return (
    <UploaderContainer>
      {/* button wrapper */}
      <UploaderPlaceholder style={style}>
        <UploaderBtnWrapper>
          <UploaderBtn onClick={() => handleDeleteImage()}>
            <DeleteIcon icon={deleteIcon} />
          </UploaderBtn>
        </UploaderBtnWrapper>

        {/* upload Input Box */}
        {currentImg && currentImg.dataUrl !== null && (
          <UploaderFileInputLabel id="file_uploader">
            <UploadIcon element={uploadIcon} />
            {/* input element */}
            <UploaderFileInput
              key={currentImg.dataUrl}
              type="file"
              name="upload"
              onChange={(e) => handleFilePicker(e)}
              accept="image/*"
              id="file_uploader"
            />
          </UploaderFileInputLabel>
        )}
        {/* image */}
        {currentImg.dataUrl && (
          <UploaderFile
            src={currentImg.dataUrl}
            alt={currentImg.dataUrl}
            loading="lazy"
          />
        )}
      </UploaderPlaceholder>
    </UploaderContainer>
  );
};

export default ImageUpload;
export type { FileUploaderProps, FileObjectType };
