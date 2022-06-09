import { observer } from 'mobx-react-lite';
import { Header } from '../components/Header';
import { PostForm } from '../components/PostForm';
import { AppInterface } from '../interfaces/AppInterface';
import { Title } from '../styles/global';

const App = observer((props:AppInterface) => {
  return (
    <div className='d-flex align-items-center flex-column'>
      <Header/>
      <PostForm/>
      <Title className='mb-2'>Feed</Title>
      {props.dataStore.getAllPostsJsx()}
    </div>
  );
})

export default App;
