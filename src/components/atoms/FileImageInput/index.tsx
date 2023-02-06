import React from "react";
import { UploadButton, DefaultImage, Label, UploadedImage } from "./styles";
import uploadImage from "_assets/upload-image.svg";

interface FileImageInput extends React.InputHTMLAttributes<HTMLInputElement> {
  photo: string;
}

export const FileImageInput = React.forwardRef<
  HTMLInputElement,
  Omit<FileImageInput, "key">
>(({photo, ...props }, ref) => {
  const hasPhoto = React.useMemo(() => !!photo, [photo]);

  return (
    <Label hasPhoto={hasPhoto}>
      <input
        type="file"
        ref={ref}
        {...props}
        key={photo}
        accept="image/*"
        style={{ display: "none" }}
      />
      <UploadButton>
        {hasPhoto ? (
          <UploadedImage src={photo} />
        ) : (
          <DefaultImage src={uploadImage} />
        )}
      </UploadButton>
    </Label>
  );
});
