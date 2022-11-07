/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { Message, PropsDashContext } from "../../context/interfaces";
import Button from "../Button";
import Input from "../Input";
import TextField from "../TextField";
import UploadImage from "../UploadImage";
import { BoxContainer, ButtonsContainer } from "./styles";
import uniqid from "uniqid";
import { DashContext } from "../../context/DashboardContext";

function InformationBox() {
  const { setMessages, messages } = useContext(DashContext) as PropsDashContext;
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [message, setMessage] = useState<Message>({
    name: "",
    description: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage({ ...message, [name]: value });
  };

  const handleSendMessage = () => {
    if (!message?.name || !message?.description) return;

    const messageBody = { ...message, image: profileImage, id: uniqid() };
    setMessages([...messages, messageBody]);
    setMessage({ ...message, description: "" });
    localStorage.setItem(
      "messagesBox",
      JSON.stringify([...messages, messageBody]),
    );
  };

  return (
    <BoxContainer>
      <UploadImage setProfileImage={setProfileImage} />
      <Input
        placeholder="Digite seu nome"
        name="name"
        onChange={handleInputs}
        value={message?.name}
        cy="input-name"
      />
      <TextField
        rows={20}
        cols={40}
        name="description"
        onChange={handleInputs}
        value={message?.description}
      />
      <ButtonsContainer>
        <Button text="Descartar" typeBtn="discard" />
        <Button text="Publicar" onClick={handleSendMessage} typeBtn="submit" />
      </ButtonsContainer>
    </BoxContainer>
  );
}

export default InformationBox;
