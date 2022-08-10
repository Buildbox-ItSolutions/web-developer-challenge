import { useFormikContext } from "formik";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
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
  shouldResetImage: boolean;
  setShouldResetImage: Dispatch<SetStateAction<boolean>>;
};

const INITIAL_IMG = "/image-upload.svg";

const FormImage = ({
  shouldResetImage,
  setShouldResetImage,
}: FormImageProps) => {
  const { setFieldValue } = useFormikContext<PostType>();

  const [image, setImage] = useState<FileList | null>(null);
  const [imageURL, setImageURL] = useState<string>(INITIAL_IMG);

  useEffect(() => {
    if (image === null) return;
    const newImageURL = URL.createObjectURL(image[0]);
    setImageURL(newImageURL);
  }, [image]);

  useEffect(() => {
    setFieldValue("imageURL", imageURL);
  }, [imageURL]);

  const resetInputFile = useCallback(() => {
    const wrapper = document.getElementById("image-wrapper");
    if (wrapper) {
      const oldInput = document.getElementById("file");
      if (oldInput) wrapper.removeChild(oldInput);
      const newInput = document.createElement("input");
      newInput.id = "file";
      newInput.type = "file";
      newInput.accept = "image/*";
      newInput.onchange = (e: any) => setImage(e.target.files);
      newInput.style.display = "none";
      wrapper.appendChild(newInput);
    }
  }, []);

  useEffect(() => {
    if (shouldResetImage) {
      setImageURL(INITIAL_IMG);
      setShouldResetImage(false);
      resetInputFile();
    }
  }, [setShouldResetImage, shouldResetImage]);

  const onImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files);
  }, []);

  const getImage = useCallback(() => {
    const input = document.getElementById("file");
    if (input) input.click();
  }, []);

  const deleteImage = useCallback(() => {
    setImageURL(INITIAL_IMG);
    resetInputFile();
  }, [setImageURL, INITIAL_IMG]);

  return (
    <>
      <Wrapper id="image-wrapper" onClick={getImage}>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={onImageChange}
          style={{ display: "none" }}
        />
        <Image
          id="image"
          primary={imageURL === INITIAL_IMG}
          src={imageURL}
          alt="upload"
        />
      </Wrapper>
      {imageURL !== INITIAL_IMG && (
        <DeleteImage src="/trash.svg" alt="delete" onClick={deleteImage} />
      )}
    </>
  );
};

export default FormImage;
