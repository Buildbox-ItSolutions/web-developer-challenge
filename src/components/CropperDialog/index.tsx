import React, { useState } from "react";
import { Cropper } from "react-cropper";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "../../styles/components/styled";

const CropperDialog = (props: any) => {
  const material = useStyles();

  const [cropper, setCropper] = useState<any>();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      props.setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <Dialog
      className={material.dialog}
      open={props.showCropper}
      onClose={() => props.setShowCropper(false)}
    >
      <DialogTitle>
        <span>Ajuste sua imagem</span>
        <CloseIcon onClick={() => props.setShowCropper(false)} />
      </DialogTitle>
      <DialogContent>
        <Cropper
          initialAspectRatio={1}
          aspectRatio={1 / 1}
          src={props.image}
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
        <button
          onClick={() => {
            getCropData();
            props.setShowCropper(false);
          }}
        >
          Cortar
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CropperDialog;
