import { useState } from "react";
import ImageComponent from "../Image";
import { UploadContainer } from "./styles";

function UploadImage() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>(
    "Faça o upload de sua foto",
  );

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    }

    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "react_upload");

    setLoadingText("Carregando");
    setLoading(false);

    const response = await fetch(
      "http://api.cloudinary.com/v1_1/dmsj8l3ea/image/upload",
      { method: "POST", body: data },
    );

    const file = await response.json();
    setImage(file.secure_url);
    setLoading(true);
  };

  return (
    <UploadContainer>
      <ImageComponent src={image} />
      {!loading && <h3>{loadingText}</h3>}
      <input
        type="file"
        name="file"
        id="files"
        placeholder="Upload an Image"
        onChange={uploadImage}
      />
    </UploadContainer>
  );
}

export default UploadImage;
