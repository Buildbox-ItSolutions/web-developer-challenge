import { FC } from 'react';
import { BixInput, BixTextArea } from '@bix/core';

import { CreatePostProps } from './model';
import { CreatePostStyled } from './styles';

export const CreatePost: FC<CreatePostProps> = () => {
  return (
    <CreatePostStyled>
      <div>
        <BixInput placeholder="Digite seu nome" maxLength={40} block onChange={(e: string) => console.log(e)} />

        <BixTextArea placeholder="Mensagem" cols={20} rols={20} maxLength={167} block onChange={(e: string) => console.log(e)} />
      </div>
    </CreatePostStyled>
  );
};
