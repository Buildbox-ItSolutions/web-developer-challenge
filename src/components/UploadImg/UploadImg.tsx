import React, { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import ImgLogo from "../../assets/img-logo.svg";
import TrashIcon from "../../assets/trash-icon.svg";

import { IPostForm } from "../../pages/Feed/Feed.interface";

const ImgFile = styled.label`
  display: grid;
  place-content: center;
  height: 88px;
  width: 88px;
  border: 1px solid ${(props) => props.theme.gray200};
  border-radius: 40%;
  cursor: pointer;
  align-self: center;
  margin-bottom: 16px;

  input {
    display: none;
  }

  .userImg {
    height: 88px;
    width: 88px;
    object-fit: cover;
    border-radius: 40%;
  }
`;

const ImgFileWrapper = styled.div`
  position: relative;
  align-self: center;

  .trash-icon {
    position: absolute;
    top: calc(50% - 8px);
    right: -40px;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

const UploadImg = ({
  setPostForm,
  postForm,
}: {
  postForm: IPostForm;
  setPostForm: Dispatch<SetStateAction<IPostForm>>;
}) => {
  const imagemRef = useRef<HTMLInputElement | null>(null);

  const onSelectedImg = (event: React.ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;

    const file: File = (files as FileList)[0];

    const imgURL = URL.createObjectURL(file);

    setPostForm((prev) => ({ ...prev, photo: imgURL }));
  };

  const removeSelectedImg = () => {
    setPostForm((prev) => ({ ...prev, photo: "" }));
    if (imagemRef.current) imagemRef.current.value = "";
  };

  return (
    <ImgFileWrapper>
      <ImgFile tabIndex={0}>
        <input
          ref={imagemRef}
          type="file"
          accept="image/*"
          onChange={onSelectedImg}
          name="photo"
          data-testid="image-uploader-input"
        />
        {postForm.photo ? (
          <img
            src={postForm.photo}
            className="userImg"
            data-testid="image-uploaded"
          />
        ) : (
          <img src={ImgLogo} data-testid="image-placeholder" />
        )}
      </ImgFile>{" "}
      {postForm.photo && (
        <img
          src={TrashIcon}
          onClick={removeSelectedImg}
          className="trash-icon"
          data-testid="trash-icon"
        />
      )}
    </ImgFileWrapper>
  );
};

export default UploadImg;
