import React, { useContext } from 'react';
import FeedContent from '../../components/FeedContent';

import { AnimeLeft, MainContainer } from '../../global';
import FormContainer from './FormContainer';

import { Container, Feed } from './styles';
import { CardContext } from '../../CardContext';

const Home: React.FC = () => {

  const { cards } = useContext(CardContext);



  return (
    <Container>
      <AnimeLeft>
        <MainContainer>
          <FormContainer />
          <h4>Feed</h4>

          <Feed>

            {cards && cards.map((card) => (

              <FeedContent
                key={card.id}
                mensagem={card.mensagem}
                nome={card.nome}
                url={card.url}
                id={card.id}
              />

            ))}

          </Feed>

        </MainContainer>
      </AnimeLeft>
    </Container>
  )
}

export default Home;