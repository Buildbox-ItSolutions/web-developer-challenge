import React, { useContext } from "react";
import { DashContext } from "../../context/DashboardContext";
import Button from "../Button";
import { PropCardMessage } from "./interface";
import {
  CardContainer,
  UserContainer,
  ImageUser,
  DescriptionInfos,
} from "./styles";
import { PropsDashContext } from "../../context/interfaces";
import { ContainerCardBox } from "./styles";

function CardMessage({ description, image, name, id }: PropCardMessage) {
  const { messages, setMessages } = useContext(DashContext) as PropsDashContext;

  const deleteMessage = () => {
    const messageDeleted = messages.filter((message) => message.id !== id);
    console.log(messageDeleted);
    setMessages(messageDeleted);
    localStorage.setItem("messagesBox", JSON.stringify(messageDeleted));
  };

  return (
    <ContainerCardBox data-cy="box-message">
      <Button text="X" typeBtn="discart" onClick={deleteMessage} />
      <CardContainer>
        <UserContainer>
          <ImageUser src={image} alt="user" />
          <DescriptionInfos>
            <p data-cy="message-desc">{description}</p>
            <p>Enviado por</p>
            <strong data-cy="name-user">{name}</strong>
          </DescriptionInfos>
        </UserContainer>
      </CardContainer>
    </ContainerCardBox>
  );
}

export default CardMessage;
