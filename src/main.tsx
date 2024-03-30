import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import DataProvider from './context/DataProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>,
);
