import React from "react";

// COMPONENTS
import ImgPost from "../ImgPost";
import NamePost from "../NamePost";
import AreaPost from "../AreaPost";
import ButtonsPost from "../ButtonsPost";
import CropperDialog from "../CropperDialog";
// STYLES
import Container from "./styles";

const CreatePost = () => (
  <Container>
    <ImgPost />

    <NamePost />
    <AreaPost />

    <ButtonsPost />

    <CropperDialog />
  </Container>
);

export default CreatePost;
