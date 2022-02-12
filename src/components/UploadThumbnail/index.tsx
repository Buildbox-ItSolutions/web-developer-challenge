import { ChangeEvent } from "react";
import iconImage from "../../assets/icons/image.svg";
import iconTrash from "../../assets/icons/trash.svg";
import { Container } from "./styles";

interface ThumbsProps {
  onSubmit: (e: ChangeEvent<HTMLInputElement>) => void;
  urlThumbnail?: string;
  onRemoveImage: () => void;
}

export const UploadThumbnail = ({
  onSubmit,
  urlThumbnail,
  onRemoveImage,
}: ThumbsProps) => {
  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    onSubmit(e);
    e.currentTarget.value = "";
  };

  return (
    <Container haveImage={!!urlThumbnail}>
      <label htmlFor="avatar">
        <img src={iconImage} alt="icon" id="icon-image" />

        <input type="file" id="avatar" onChange={handleSelectImage} />
        {urlThumbnail && <img src={urlThumbnail} alt="imagem" />}
      </label>
      {urlThumbnail && (
        <button type="button" id="btn-delete" onClick={onRemoveImage}>
          <img src={iconTrash} alt="iconDelete" />
        </button>
      )}
    </Container>
  );
};
