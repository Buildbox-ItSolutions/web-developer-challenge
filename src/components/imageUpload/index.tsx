import { ChangeEvent } from "react";
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
  image,
  setImage,
  onFileAdded,
  onFileRemoved,
  uploadIcon,
  deleteIcon,
  style,
}: FileUploaderProps): JSX.Element => {
  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;

    if (files != null && files.length > 0) {
      const newImage = {
        file: files[0],
        dataUrl: URL.createObjectURL(files[0]),
      };
      setImage(newImage);
      if (onFileAdded) {
        onFileAdded(newImage);
      }
    }
  };

  const handleDeleteImage = (): void => {
    if (onFileRemoved) {
      onFileRemoved(image);
    }
    setImage(undefined);
  };

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
        <UploaderFileInputLabel id="file_uploader">
          <UploadIcon element={uploadIcon} />
          {/* input element */}
          <UploaderFileInput
            key={image?.dataUrl ?? ""}
            type="file"
            name="upload"
            onChange={(e) => handleFilePicker(e)}
            accept="image/*"
            id="file_uploader"
          />
        </UploaderFileInputLabel>
        {/* image */}
        {image && image.dataUrl && (
          <UploaderFile
            src={image.dataUrl}
            alt={image.dataUrl}
            loading="lazy"
          />
        )}
      </UploaderPlaceholder>
    </UploaderContainer>
  );
};

export default ImageUpload;
export type { FileUploaderProps, FileObjectType };
