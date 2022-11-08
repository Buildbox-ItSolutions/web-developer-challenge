import user from '@assets/user.png';
import { FeedMessage } from '@components/FeedMessage';
import { useMessage } from '@hooks/message';

import * as S from './styles';

export const Feed = () => {
  const { messages } = useMessage();

  console.log({ messages });
  return (
    <S.Container>
      <S.Title>Feed</S.Title>
      {messages.length > 0 ? (
        messages.map(({ id, name, description, image }) => (
          <FeedMessage
            key={id}
            id={id}
            name={name}
            description={description}
            image={image ?? user}
          />
        ))
      ) : (
        <S.Description>{'Nenhuma mensagem enviada'}</S.Description>
      )}
    </S.Container>
  );
};
