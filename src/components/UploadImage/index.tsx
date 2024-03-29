import { ChangeEvent, ReactNode } from "react";

interface Props {
  triggerComponent: ReactNode;
  setImage: (file: File) => void
}

export default function UploadImage({ triggerComponent, setImage }: Props) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <>
      <input 
        type="file"
        accept="image/*"
        id="select-image"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <label htmlFor="select-image">
        {triggerComponent}
      </label>
    </>
  )
}