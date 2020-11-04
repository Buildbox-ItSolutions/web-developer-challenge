import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Cropper } from "react-cropper";

import BxLogo from "../images/Header/bx-logo.png";
import PostImage from "../images/ImgPost/post-image.png";

// STYLED
import { BoxBody, ButtonsPost, useStyles } from "../styles/components/styled";
// COMPONENTS
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import ImgPost from "../components/ImgPost";
import NamePost from "../components/NamePost";
import AreaPost from "../components/AreaPost";
import ButtonPost from "../components/ButtonPost";
// ICONS
import CloseIcon from "@material-ui/icons/Close";

import "cropperjs/dist/cropper.css";

const Main = () => {
  const material = useStyles();

  const [showCropper, setShowCropper] = useState(false);

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();

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
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <React.Fragment>
      <Header>
        <img src={BxLogo} className="bx-logo" alt="Logo" />
      </Header>
      <BoxBody>
        <CreatePost>
          <ImgPost>
            <label htmlFor="inppost">
              <img src={cropData !== "" ? cropData : PostImage} alt="Post" />
              <input
                id="inppost"
                onChange={(e) => {
                  onChange(e);
                  setShowCropper(true);
                }}
                type="file"
                accept="image/*"
              />
            </label>
          </ImgPost>

          <NamePost placeholder="Digite seu nome" />
          <AreaPost placeholder="Mensagem" />

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
        <Dialog
          className={material.dialog}
          open={showCropper}
          onClose={() => setShowCropper(false)}
        >
          <DialogTitle>
            <span>Ajuste sua imagem</span>
            <CloseIcon onClick={() => setShowCropper(false)} />
          </DialogTitle>
          <DialogContent>
            <Cropper
              initialAspectRatio={1}
              aspectRatio={1 / 1}
              src={image}
              viewMode={1}
              guides={true}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              onInitialized={(instance: any) => {
                setCropper(instance);
              }}
            />
          </DialogContent>
          <DialogActions>
            <button
              onClick={() => {
                getCropData();
                setShowCropper(false);
              }}
            >
              Cortar!
            </button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
};

export default Main;
