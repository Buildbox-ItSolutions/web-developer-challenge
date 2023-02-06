import notFoundSource from '@/global/assets/not_found.png';

import * as Styles from './styles';
import { useCard } from './useCard';
import { IComponentParams } from './types';

export function CardComponent({ post }: IComponentParams) {
  const { handleRemovePost } = useCard();

  return (
    <Styles.Card>
      <Styles.Header>
        <Styles.ButtonIcon
          aria-label="Botão de excluir a postagem"
          onClick={() => handleRemovePost(post.id)}
        >
          <Styles.CloseIcon />
        </Styles.ButtonIcon>
      </Styles.Header>

      <Styles.Group>
        <Styles.Thumbnail
          src={post.thumbnail ?? notFoundSource}
          alt={`Imagem da postagem ${post.name}`}
        />

        <div>
          <p>{post.message}</p>

          <Styles.GroupAuthor>
            <span>Enviado por</span>
            <span>{post.name}</span>
          </Styles.GroupAuthor>
        </div>
      </Styles.Group>
    </Styles.Card>
  );
}
