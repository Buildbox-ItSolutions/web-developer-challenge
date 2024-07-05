import React from "react";
import {
  CustomImageInput,
  CustomImageLabel,
  CustomInput,
  CustomTextArea,
  ErrorMessage,
} from "./style";
import { PiImageSquareThin } from "react-icons/pi";

export const Input = ({ ...props }) => {
  return (
    <>
      <CustomInput {...props} />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </>
  );
};

export const TextArea = ({ ...props }) => {
  return (
    <>
      <CustomTextArea {...props} />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </>
  );
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
