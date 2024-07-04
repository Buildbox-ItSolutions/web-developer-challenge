import React from "react";
import {
  CustomImageInput,
  CustomImageLabel,
  CustomInput,
  CustomTextArea,
} from "./style";

export const Input = ({ ...props }) => {
  return <CustomInput {...props} />;
};

export const TextArea = ({ ...props }) => {
  return <CustomTextArea {...props} />;
};

export const ImageInput = ({ ...props }) => {
  return (
    <>
      <CustomImageLabel htmlFor="imageInput" />
      <CustomImageInput
        id="imageInput"
        type="file"
        accept="image/*"
        {...props}
      />
    </>
  );
};
