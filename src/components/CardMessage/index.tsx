import React from "react";
import { PropCardMessage } from "./interface";
import { CardContainer, UserContainer, UserInfos } from "./styles";

function CardMessage({ description, image, name, id }: PropCardMessage) {
  return (
    <CardContainer onClick={() => id}>
      <UserContainer>
        <div>
          <img src={image} alt="user" />
        </div>
        <div>
          <p>{description}</p>
          <UserInfos>
            <p>Enviado por</p>
            <strong>{name}</strong>
          </UserInfos>
        </div>
      </UserContainer>
    </CardContainer>
  );
}

export default CardMessage;
