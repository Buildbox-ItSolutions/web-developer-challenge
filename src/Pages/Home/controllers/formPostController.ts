/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export class FormPostController {
  imageAvatar: string;
  setImageAvatar: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;

  constructor() {
    [this.imageAvatar, this.setImageAvatar] = useState("");
    [this.name, this.setName] = useState("");
    [this.message, this.setMessage] = useState("");
  }

  handleImageToBase64(e: any) {
    const reader = new FileReader();
    reader.onload = (upload: any) => {
      this.setImageAvatar(upload.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  handleSetName(name: string): void {
    this.setName(name);
  }

  handleSetMessage(message: string): void {
    this.setMessage(message);
  }

  handleDiscardPost(e: any) {
    e.preventDefault();
    this.setMessage("");
    this.setName("");
    this.setImageAvatar("");
  }

  handlePublishPost(e: any) {
    e.preventDefault();
    if (this.name.length === 0) {
      return alert("erro");
    }
    if (this.message.length === 0) {
      return alert("");
    }
  }
}
