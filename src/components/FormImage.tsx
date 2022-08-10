import { useFormikContext } from "formik";
import React, {
  ChangeEvent,
  Dispatch,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { PostType } from "../types/PostType";

const Wrapper = styled.div`
  margin: 0 0 16px;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  display: none;
`;

const Image = styled("img")<{ primary: boolean }>`
  object-fit: contain;
  width: 100%;
  max-height: 100%;
  margin: ${({ primary }) => (primary ? "32px" : "0")};
`;

const DeleteImage = styled.img`
  position: absolute;
  top: 56px;
  right: 174px;
`;

type FormImageProps = {
  resetImage: boolean;
  setResetImage: Dispatch<React.SetStateAction<boolean>>;
};

const INITIAL_IMG = "/image-upload.svg";

const FormImage = ({ resetImage, setResetImage }: FormImageProps) => {
  const { values, setFieldValue } = useFormikContext<PostType>();

  const [image, setImage] = useState<FileList | null>(null);
  const [imageURL, setImageURL] = useState<string>(INITIAL_IMG);

  useEffect(() => {
    if (!image) return;

    const newImageURL = URL.createObjectURL(image[0]);
    setImageURL(newImageURL);
  }, [image]);

  useEffect(() => {
    const img = document.getElementById("image");
    const canvas = document.createElement("canvas");
    canvas.width = (img as any).width;
    canvas.height = (img as any).height;

    const ctx = canvas.getContext("2d");
    (ctx as any).drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");
    const imageData = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    setFieldValue("imageURL", imageData);
  }, [imageURL]);

  useEffect(() => {
    if (resetImage) {
      setImageURL(INITIAL_IMG);
      setResetImage(false);
    }
  }, [setResetImage, resetImage]);

  const onImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files),
    []
  );

  const getImage = useCallback(() => {
    const input = document.getElementById("file");
    if (input) input.click();
  }, []);

  return (
    <>
      <Wrapper onClick={getImage}>
        <Input
          id="file"
          type="file"
          accept="image/*"
          onChange={onImageChange}
        />
        <Image
          id="image"
          primary={imageURL === INITIAL_IMG}
          src={imageURL}
          alt="upload"
        />
      </Wrapper>
      {imageURL !== INITIAL_IMG && (
        <DeleteImage
          src="/trash.svg"
          alt="delete"
          onClick={() => setImageURL(INITIAL_IMG)}
        />
      )}
    </>
  );
};

export default FormImage;
