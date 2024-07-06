import { FaRegTrashAlt } from "react-icons/fa";
import { GoImage } from "react-icons/go";

import { IconButton } from "../IconButton";

interface IUploadImage {
  image: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClean: () => void;
}

export default function UploadImage({
  image,
  onChange,
  onClean,
}: IUploadImage) {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "0.8rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        id="upload-photo"
        type="file"
        accept="image/*"
        onChange={onChange}
        required
      />

      {image && (
        <label
          htmlFor="upload-photo"
          style={{
            cursor: "pointer",
            borderRadius: "40%",
            width: "90px",
            height: "90px",
          }}
        >
          <img
            src={image}
            alt="image"
            style={{
              borderRadius: "40%",
              width: "90px",
              height: "90px",
            }}
          />
        </label>
      )}

      {!image && (
        <label
          htmlFor="upload-photo"
          style={{
            cursor: "pointer",
            borderRadius: "40%",
            padding: "2rem",
            width: "90px",
            height: "90px",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            border: "1px solid #4b4b4b",
          }}
        >
          <GoImage size={24} color="#9b9b9b" />
        </label>
      )}

      {image && (
        <IconButton
          onClick={onClean}
          style={{
            position: "absolute",
            top: "38px",
            right: "150px",
          }}
        >
          <FaRegTrashAlt size={18} color="#bc5225" />
        </IconButton>
      )}
    </div>
  );
}
