import { List } from '../../components/list';
import { HomeContext } from '../../contexts/homeContext';
import Header from '../../components/header';
import Register from '../../components/register/form';

import './styles.css';

function Home() {
  return (
    <HomeContext>
      <Header />
      <div className="container">
        <Register />
        <List />
      </div>
    </HomeContext>
  );
}

export default Home;
