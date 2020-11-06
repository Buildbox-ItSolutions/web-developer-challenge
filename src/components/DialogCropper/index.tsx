import React, { useContext, useState } from "react";
import { Cropper } from "react-cropper";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

// CONTEXTS
import { Context } from "../../contexts/ContextData";
import { ContextImage } from "../../contexts/ContextImage";
// ICONS
import CloseIcon from "@material-ui/icons/Close";
// STYLES
import { useStyles } from "../../styles/components/dialog-cropper";

const CropperDialog = () => {
  const material = useStyles();

  const ContImage = useContext(ContextImage);
  const ContData = useContext(Context);

  const [cropper, setCropper] = useState<any>();

  return (
    <Dialog
      className={material.dialog}
      open={ContImage.stateImg.status}
      onClose={() =>
        ContImage.setStateImg({ image: ContImage.stateImg.image, status: false })
      }
    >
      <DialogTitle>
        <span>Ajuste sua imagem</span>
        <CloseIcon
          onClick={() =>
            ContImage.setStateImg({ image: ContImage.stateImg.image, status: false })
          }
        />
      </DialogTitle>
      <DialogContent>
        <Cropper
          initialAspectRatio={1}
          aspectRatio={1 / 1}
          src={ContImage.stateImg.image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance: any) => {
            setCropper(instance);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          className={material.button}
          onClick={() => {
            if (typeof cropper !== "undefined") {
              ContData.setState({
                image: cropper.getCroppedCanvas().toDataURL(),
                name: ContData.state.name,
                msg: ContData.state.msg,
              });
            }
            ContImage.setStateImg({
              image: ContImage.stateImg.image,
              status: false,
            });
          }}
        >
          Cortar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CropperDialog;
