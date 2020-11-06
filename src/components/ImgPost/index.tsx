import React, { useContext, useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import faker from "faker";

// CONTEXTS
import { Context } from "../../contexts/ContextData";
import { ContextImage } from "../../contexts/ContextImage";
// IMAGES
import PostImage from "../../images/ImgPost/post-image.png";
import TrashImage from "../../images/ImgPost/trash.png";
// ICONS
import CloseIcon from "@material-ui/icons/Close";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import SyncIcon from "@material-ui/icons/Sync";
// STYLES
import useStyles from "../../styles/components/dialog-options";
import Container from "./styles";

const ImgPost = () => {
  const ContData = useContext(Context);
  const ContImage = useContext(ContextImage);
  const material = useStyles();

  const [showOption, setShowOption] = useState(false);

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
      ContImage.setStateImg({ image: reader.result as any, status: true });
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <Container>
      <div
        className={ContData.state.image !== "" ? "active" : ""}
        onClick={() =>
          ContData.setState({
            image: "",
            name: ContData.state.name,
            msg: ContData.state.msg,
          })
        }
      >
        <img alt="Trash" src={TrashImage} />
      </div>
      <div onClick={() => setShowOption(true)}>
        <img
          src={ContData.state.image !== "" ? ContData.state.image : PostImage}
          alt="Post"
        />
        <input
          id="inppost"
          type="file"
          accept="image/*"
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>

      <Dialog
        open={showOption}
        className={material.dialog}
        onClose={() => setShowOption(false)}
      >
        <DialogTitle>
          <span>Origem da imagem</span>
          <CloseIcon onClick={() => setShowOption(false)} />
        </DialogTitle>
        <DialogContent>
          <Button
            endIcon={<AddAPhotoIcon />}
            onClick={() => {
              document.getElementById("inppost")?.click();
              setShowOption(false);
            }}
          >
            <span>Dispositivo</span>
          </Button>
          <Button
            endIcon={<SyncIcon />}
            onClick={() => {
              ContData.setState({
                image: faker.image.imageUrl(300, 300, "nature", true),
                name: ContData.state.name,
                msg: ContData.state.msg,
              });
              setShowOption(false);
            }}
          >
            <span>Aleátoria</span>
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ImgPost;
