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
  const [image, setImage] = useState<FileObjectType>();
  const [name, setName] = useState<string>("Manuela Oliveira");
  const [message, setMessage] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
  );

  const resetRegisterHandler = () => {
    setImage(undefined);
    setName("");
    setMessage("");
  };

  const addRegisterHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      image &&
      image.dataUrl &&
      image.dataUrl.length > 0 &&
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

  const onAddImage = (img?: FileObjectType) => {
    console.log("Selecionou imagem.", img);
  };

  const onDeleteImage = (img?: FileObjectType) => {
    console.log("Apagou imagem.", img);
  };

  const handlerSetImage = (img?: FileObjectType) => {
    setImage(img);
  };

  return (
    <>
      <form onSubmit={addRegisterHandler} onReset={resetRegisterHandler}>
        <Wrapper>
          <ImageUpload
            image={image}
            setImage={handlerSetImage}
            style={styleUpload}
            deleteIcon={image ? <img src={TrashIcon} /> : <></>}
            uploadIcon={!image ? <img src={EditIcon} /> : <></>}
            onFileAdded={onAddImage}
            onFileRemoved={onDeleteImage}
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
