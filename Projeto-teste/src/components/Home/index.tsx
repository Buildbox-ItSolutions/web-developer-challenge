import Header from '../../components/Header';
import Card from '../../components/Card';
import Feed from '../../components/Feed';

import * as Styled from './styles';

function index() {
  return (
    <div>
      <Styled.Container>
        <Header />
        <Card />
        <Feed />
      </Styled.Container>
    </div>
  );
}

export default index;
