import React from "react";
import {
  CustomImageInput,
  CustomImageLabel,
  CustomInput,
  CustomTextArea,
} from "./style";
import { PiImageSquareThin } from "react-icons/pi";
import { PiTrashSimpleLight } from "react-icons/pi";

export const Input = ({ ...props }) => {
  return <CustomInput {...props} />;
};

export const TextArea = ({ ...props }) => {
  return <CustomTextArea {...props} />;
};

export const ImageInput = ({ ...props }) => {
  return (
    <>
      <CustomImageLabel htmlFor="imageInput">
        <PiImageSquareThin />
      </CustomImageLabel>
      <CustomImageInput
        id="imageInput"
        type="file"
        accept="image/*"
        {...props}
      />
    </>
  );
};
