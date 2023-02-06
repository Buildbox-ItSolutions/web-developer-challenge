import React, { useRef } from "react";
import { ReactSVG } from "react-svg";
import { imageSvg, trashSvg } from "../../assets/svg";
import { useFormContext } from "../../store";

import { Container } from "./styles";

const InputFile: React.FC = () => {
  const { handleUploadImage, filePreview, handleRemoveImage } =
    useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <Container>
        {filePreview ? (
          <img src={filePreview} onClick={handleImageClick} />
        ) : (
          <label htmlFor="img-file">
            <div>
              <ReactSVG src={imageSvg} />
            </div>
          </label>
        )}

        <input
          ref={fileInputRef}
          accept="image/*"
          type="file"
          name="img-file"
          id="img-file"
          onChange={handleUploadImage}
        />
        {filePreview && (
          <ReactSVG
            style={{ marginLeft: 8, cursor: "pointer" }}
            src={trashSvg}
            onClick={handleRemoveImage}
            width={24}
            height={24}
          />
        )}
      </Container>
    </>
  );
};

export default InputFile;
