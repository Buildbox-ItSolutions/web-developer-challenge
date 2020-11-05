import React from "react";

import PostImage from "../../images/ImgPost/post-image.png";

import Container from "./styles";

const ImgPost = (props: any) => {
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      props.setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <Container>
      <label htmlFor="inppost">
        <img src={props.cropData !== "" ? props.cropData : PostImage} alt="Post" />
        <input
          id="inppost"
          onChange={(e) => {
            onChange(e);
            props.setShowCropper(true);
          }}
          type="file"
          accept="image/*"
        />
      </label>
    </Container>
  );
};

export default ImgPost;
