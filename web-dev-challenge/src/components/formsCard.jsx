import React from 'react';
import { DivCard } from '../style/cardStyle';

function formsCard({ name, message, image }) {
  return (
    <DivCard>
      <div className="formatCard">
        <img src={image} alt={name} />
        <p className="messageText">{message}</p>
        <p className="nameText">{name ? 'Enviado por' : ''}</p>
        <p className="peopleName">{name}</p>
      </div>
    </DivCard>
  );
}

export default formsCard;
