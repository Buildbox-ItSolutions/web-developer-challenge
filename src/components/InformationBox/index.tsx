import { useEffect, useState } from "react";
import { Message } from "../../context/interfaces";
import Button from "../Button";
import Input from "../Input";
import TextField from "../TextField";
import UploadImage from "../UploadImage";
import { BoxContainer, ButtonsContainer } from "./styles";
import uniqid from "uniqid";

function InformationBox() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [message, setMessage] = useState<Message>({ id: uniqid() });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage({ ...message, [name]: value });
  };

  useEffect(() => {
    setMessage({ ...message, image: profileImage });
  }, [profileImage]);

  return (
    <BoxContainer>
      <UploadImage setProfileImage={setProfileImage} />
      <Input
        placeholder="Digite seu nome"
        name="name"
        onChange={handleInputs}
      />
      <TextField
        rows={5}
        cols={10}
        name="description"
        onChange={handleInputs}
      />
      <ButtonsContainer>
        <Button text="Descartar" />
        <Button text="Publicar" />
      </ButtonsContainer>
    </BoxContainer>
  );
}

export default InformationBox;
