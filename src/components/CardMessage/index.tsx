import React from "react";
import { PropCardMessage } from "./interface";

function CardMessage({ description, image, name, id }: PropCardMessage) {
  return (
    <div onClick={() => id}>
      <img src={image} alt="user" />
      <p>{description}</p>
      <div>
        <p>Enviado por</p>
        <strong>{name}</strong>
      </div>
    </div>
  );
}

export default CardMessage;
