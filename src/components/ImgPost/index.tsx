import React from "react";

// CONTEXTS
import { Context } from "../../contexts/Context";
// IMAGES
import PostImage from "../../images/ImgPost/post-image.png";
// STYLES
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
        <Context.Consumer>
          {(value) => (
            <img
              src={value.state.image !== "" ? value.state.image : PostImage}
              alt="Post"
            />
          )}
        </Context.Consumer>
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
