/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addPost } from "../../../GlobalStates/stores/posts/actions";

export class FormPostController {
  imageAvatar: string;
  setImageAvatar: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  dispatch: any;
  enableButtonPublish: boolean;
  setEnableButtonPublish: React.Dispatch<React.SetStateAction<boolean>>;

  constructor() {
    [this.imageAvatar, this.setImageAvatar] = useState<string>("");
    [this.name, this.setName] = useState<string>("");
    [this.message, this.setMessage] = useState<string>("");
    [this.enableButtonPublish, this.setEnableButtonPublish] = useState<boolean>(
      false
    );
    this.dispatch = useDispatch();

    /**
     * Observer that checks if the message and the name have data
     */
    useEffect(() => {
      if (this.name.length > 1 && this.message.length > 1) {
        this.setEnableButtonPublish(true);
      } else {
        this.setEnableButtonPublish(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [this.name, this.message]);
  }

  /**
   * Function that converts the image to base64
   * @param e event
   */
  handleImageToBase64(e: any) {
    const reader = new FileReader();
    reader.onload = (upload: any) => {
      this.setImageAvatar(upload.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  /**
   * Function that set name
   * @param name string
   */
  handleSetName(name: string): void {
    this.setName(name);
  }

  /**
   * Function that set message
   * @param message string
   */
  handleSetMessage(message: string): void {
    this.setMessage(message);
  }
  /**
   * Function that discard post
   * @param e event
   */
  handleDiscardPost(e: any) {
    e.preventDefault();
    this.setMessage("");
    this.setName("");
    this.setImageAvatar("");
  }

  /**
   * Function that publish post in feed
   * @param e
   */
  handlePublishPost(e: any) {
    e.preventDefault();

    if (this.name.length === 0) {
      return toast.error("Insira um Nome", {});
    }
    if (this.message.length === 0) {
      return toast.error("Insira uma menssagem");
    }
    if (this.name.length > 30) {
      return toast.error("Nome não pode ter mais de 30 caracteres");
    }

    /**
     * dispatch to redux
     */
    this.dispatch(
      addPost({
        image: this.imageAvatar,
        message: this.message,
        name: this.name,
      })
    );
    this.setImageAvatar("");
    this.setMessage("");
    this.setName("");
  }
}
