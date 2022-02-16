import React from 'react';

import { Container } from './styles';

import trashImage from '../../images/delete.png';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img
        src={trashImage}
        alt="excluir mensagem"
        data-testid="delete-button"
      />
    </Container>
  );
};

export default DeleteButton;
