import { ChangeEvent, ReactNode } from "react";
import { toast } from "react-toastify";

interface Props {
  triggerComponent: ReactNode;
  setImage: (file: File) => void;
}

export default function UploadImage({ triggerComponent, setImage }: Props) {
  const maximumSize = 1024 * 1024 * 10;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if(files && files[0].size > maximumSize) {
      return toast.info("O tamanho máximo permitido para a imagem é de 10 MB")
    }

    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        size={2}
        id="select-image"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <label htmlFor="select-image">{triggerComponent}</label>
    </>
  );
}
