import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

import { Input } from "../Input ";

import { Container, Content, Image, TrashBin } from "./styles";

type Props = {
  register: UseFormRegister<FieldValues>;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  setValue: (name: string, value: string) => void;
};

export const ImageUploader: React.FC<Props> = ({
  register,
  setValue,
  imageUrl,
  setImageUrl,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputFileRef?.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const url = URL.createObjectURL(event!.target!.files![0]);
    setImageUrl(url);
  };

  const removeImage = () => {
    setImageUrl("");
  };

  useEffect(() => {
    setValue("image", imageUrl);
  }, [imageUrl]);

  return (
    <Container>
      <Content onClick={handleClick}>
        <Image
          src={imageUrl || "assets/images/image.svg"}
          hasValue={!!!imageUrl}
        />

        <Input
          name="image"
          register={register}
          hasDisplay={false}
          value={imageUrl}
        />

        <input
          style={{
            display: "none",
          }}
          accept="image/png, image/jpeg"
          type="file"
          ref={inputFileRef}
          onChange={handleChange}
        />
      </Content>

      {imageUrl && <TrashBin onClick={removeImage} />}
    </Container>
  );
};
