import { FC } from 'react';
import { BixCard } from '@bix/core';

import { CardPostProps } from './model';
import { CardPostStyled } from './styles';

import remove from '@/assets/delete.svg';

export const CardPost: FC<CardPostProps> = ({ message, author, onRemove }) => {
  return (
    <CardPostStyled>
      <img src={remove} onClick={() => onRemove()} />

      <BixCard>
        <img src={author.avatar} />

        <div>
          <p>{message}</p>

          <div>
            <span>Enviado por</span>

            <p>{author.name}</p>
          </div>
        </div>
      </BixCard>
    </CardPostStyled>
  );
};
