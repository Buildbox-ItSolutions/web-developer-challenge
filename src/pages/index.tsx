import React, { useState } from "react";

// COMPONENTS
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import ImgPost from "../components/ImgPost";
import NamePost from "../components/NamePost";
import AreaPost from "../components/AreaPost";
import ButtonPost from "../components/ButtonPost";
import CropperDialog from "../components/CropperDialog";
// STYLED
import { BoxBody, ButtonsPost } from "../styles/components/styled";

const Main = () => {
  const [image, setImage] = useState("");
  const [showCropper, setShowCropper] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <BoxBody>
        <CreatePost>
          <ImgPost
            setImage={(v: React.SetStateAction<string>) => setImage(v)}
            setShowCropper={(v: React.SetStateAction<boolean>) => setShowCropper(v)}
          />

          <NamePost />
          <AreaPost />

          <ButtonsPost>
            <ButtonPost title="Descartar">Descartar</ButtonPost>
            <ButtonPost title="Publicar">Publicar</ButtonPost>
          </ButtonsPost>
        </CreatePost>
      </BoxBody>

      {showCropper && (
        <CropperDialog
          image={image}
          showCropper={showCropper}
          setShowCropper={(v: React.SetStateAction<boolean>) => setShowCropper(v)}
        />
      )}
    </React.Fragment>
  );
};

export default Main;
