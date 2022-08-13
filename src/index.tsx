import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import Main from './pages/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Main />
);