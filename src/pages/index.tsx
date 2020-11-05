import React, { useState } from "react";

// COMPONENTS
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import ImgPost from "../components/ImgPost";
import NamePost from "../components/NamePost";
import AreaPost from "../components/AreaPost";
import ButtonPost from "../components/ButtonPost";
import CropperDialog from "../components/CropperDialog";
// CONTEXTS
import { ContextName, ContextMsg } from "../contexts/ContextName";
// IMAGES
import BxLogo from "../images/Header/bx-logo.png";
// STYLED
import { BoxBody, ButtonsPost } from "../styles/components/styled";

const Main = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const [showCropper, setShowCropper] = useState(false);
  const [cropData, setCropData] = useState("");

  return (
    <React.Fragment>
      <Header>
        <img src={BxLogo} className="bx-logo" alt="Logo" />
      </Header>
      <BoxBody>
        <CreatePost>
          <ImgPost
            cropData={cropData}
            setImage={(v: React.SetStateAction<string>) => setImage(v)}
            setShowCropper={(v: React.SetStateAction<boolean>) => setShowCropper(v)}
          />

          <ContextName.Provider value={name}>
            <NamePost nameVal={(v: React.SetStateAction<string>) => setName(v)} />
          </ContextName.Provider>
          <ContextMsg.Provider value={msg}>
            <AreaPost msgVal={(v: React.SetStateAction<string>) => setMsg(v)} />
          </ContextMsg.Provider>

          <ButtonsPost>
            <ButtonPost disabled={false} title="Descartar">
              Descartar
            </ButtonPost>
            <ButtonPost disabled={true} title="Publicar">
              Publicar
            </ButtonPost>
          </ButtonsPost>
        </CreatePost>
      </BoxBody>

      {showCropper && (
        <CropperDialog
          image={image}
          showCropper={showCropper}
          setCropData={(v: any) => setCropData(v)}
          setShowCropper={(v: React.SetStateAction<boolean>) => setShowCropper(v)}
        />
      )}
    </React.Fragment>
  );
};

export default Main;
