import React, { useState, ChangeEvent, FormEvent } from "react";
import { IRegister } from "../../interfaces/Register";
import { ButtonsWrapper, FieldsWrapper, styleUpload, Wrapper } from "./styles";
import InputField from "../input/InputField";
import ImageUpload, { FileObjectType } from "../imageUpload";
import EditIcon from "../../assets/img/image.png";
import TrashIcon from "../../assets/img/trash.png";

interface Props {
  btnDiscard: string;
  btnPublic: string;
  registerList: IRegister[];
  setRegisterList?: React.Dispatch<React.SetStateAction<IRegister[]>>;
}
const Register = ({
  btnDiscard,
  btnPublic,
  registerList,
  setRegisterList,
}: Props) => {
  const [image, setImage] = useState<string>();
  const [name, setName] = useState<string>("Manuela Oliveira");
  const [message, setMessage] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
  );
  const ImageUploadClearEvent = new CustomEvent("imagem-upload-clear-event");

  const resetRegisterHandler = () => {
    setImage("");
    setName("");
    setMessage("");
    window.dispatchEvent(ImageUploadClearEvent);
  };

  const addRegisterHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      image &&
      image.length > 0 &&
      name &&
      name.length > 0 &&
      message &&
      message.length > 0
    ) {
      const id = Math.floor(Math.random() * 100);

      const newRegister: IRegister = { id, image, name, message };

      setRegisterList!([...registerList, newRegister]);
      resetRegisterHandler();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const onAddImage = (img: string) => {
    setImage(img);
  };

  const onDeleteImage = () => {
    setImage("");
  };

  return (
    <>
      <form onSubmit={addRegisterHandler} onReset={resetRegisterHandler}>
        <Wrapper>
          <ImageUpload
            style={styleUpload}
            deleteIcon={image ? <img src={TrashIcon} /> : <></>}
            uploadIcon={!image ? <img src={EditIcon} /> : <></>}
            onFileAdded={({ dataUrl }: FileObjectType) => onAddImage(dataUrl)}
            onFileRemoved={() => onDeleteImage()}
          />
          <FieldsWrapper>
            <InputField
              type="text"
              name="name"
              value={name}
              placeholder="Nome"
              onChange={handleChange}
            />
            <InputField
              type="textarea"
              name="message"
              value={message}
              placeholder="Mensagem"
              onChange={handleChange}
            />
          </FieldsWrapper>
          <ButtonsWrapper>
            <button type="reset">{btnDiscard}</button>
            <button type="submit">{btnPublic}</button>
          </ButtonsWrapper>
        </Wrapper>
      </form>
    </>
  );
};

export default Register;
