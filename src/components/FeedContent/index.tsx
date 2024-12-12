import React, { useContext } from 'react';
import deleteImg from '../../assets/delete.svg';

import { Container, Figure, Section } from './styles';
import { Cards, CardContext } from '../../CardContext';


const FeedContent: React.FC<Cards> = ({ mensagem, nome, url, id }) => {

  const { cards, setCards } = useContext(CardContext);

  function handleDelete(id: string) {

    const confirm = window.confirm('Deseja excluir essa foto?');

    if (!confirm) return;

    const filtered = cards.filter(x => x.id !== id);
    setCards(filtered);
  }


  if (!id) return null;

  return (
    <Container>

      <button onClick={() => handleDelete(id)}>
        <img src={deleteImg} alt="Icon Deletar imagem" />
      </button>

      <Section>

        <Figure>
          <img src={url} alt={nome} />
        </Figure>

        <div>
          <p>{mensagem}</p>
          <h5>Enviado por</h5>
          <p>{nome}</p>
        </div>

      </Section>

    </Container>
  )
}

export default FeedContent;