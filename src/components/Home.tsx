import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import { DataServicesIBGETypes, ItemsTypes } from '../types';
import CardNews from './CardNews';
import styles from '../styles/CardNews.module.css';
import Footer from './Footer';

export default function Home() {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const [news, setNews] = useState<DataServicesIBGETypes>();
  const { result, getApiIBGE } = useContext(DataContext);

  useEffect(() => {
    const fetchNews = async () => {
      await getApiIBGE(url);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (result) {
      setNews(result);
      console.log(result);
    }
  }, [result]);

  return (
    <div>
      <ul className={ styles.cardLi }>
        {news?.items.map((item: ItemsTypes, index) => (
          <li key={ item.id }>
            <CardNews
              titulo={ item.titulo }
              introducao={ item.introducao }
              data_publicacao={ item.data_publicacao }
              item={ item }
              link={ item.link }
              imagens={ item.imagens }
              index={ index }
            />
          </li>
        ))}
      </ul>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
