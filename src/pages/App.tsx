import Feed from 'components/Feed';
import Form from 'components/Form';
import Header from 'components/Header';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Header />
      <Form />
      <Feed />
    </div>
  );
}

export default App;
