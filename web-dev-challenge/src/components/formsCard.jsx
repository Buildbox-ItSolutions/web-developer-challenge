import React from 'react';

function formsCard({ name, message, image }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <p>{message}</p>
        <p>{name ? 'Enviado por' : ''}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default formsCard;
